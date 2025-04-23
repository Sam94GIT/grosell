require('dotenv').config(); // Load environment variables

const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require("bcrypt");

const FarmModel = require('./models/Farm');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection using .env
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// ========== AUTH ==========

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await FarmModel.create({
            name,
            email,
            password: hashedPassword,
        });

        res.json(newUser);
    } catch (err) {
        res.status(500).json("Error: " + err.message);
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await FarmModel.findOne({ email });

        if (!user) {
            return res.status(400).json("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json("Invalid Password");
        }

        res.status(200).json("Success");

    } catch (err) {
        res.status(500).json("Error: " + err.message);
    }
});



app.use('/api/orders', require('./routes/orderRoutes'));
// Routes

// ========== SERVER ==========

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});









