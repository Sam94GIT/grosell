import React, { forwardRef } from 'react';

// Utility function (simplified)
const cn = (...args) => {
    return args.filter(Boolean).join(' ');
};

// Button Component
const Button = forwardRef(
    ({
        variant = 'default',
        size = 'default',
        className,
        children,
        ...props
    }, ref) => {
        const baseClasses = cn(
            'inline-flex items-center justify-center rounded-md font-medium transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:opacity-50 disabled:pointer-events-none',
            className
        );

        const variantClasses = {
            default: 'bg-blue-500 text-white hover:bg-blue-600',
            outline: 'border border-gray-200 text-gray-900 hover:bg-gray-100',
            ghost: 'text-gray-900 hover:bg-gray-100',
            destructive: 'bg-red-500 text-white hover:bg-red-600',
            secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        };

        const sizeClasses = {
            default: 'px-4 py-2',
            sm: 'px-3 py-1.5 text-sm',
            lg: 'px-6 py-3 text-lg',
            icon: 'p-2',
        };

        return (
            <button
                ref={ref}
                className={cn(baseClasses, variantClasses[variant], sizeClasses[size])}
                {...props}

            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
