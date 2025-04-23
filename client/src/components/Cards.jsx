import React from 'react';

// Card Component
export const Card = ({ children, className, ...props }) => {
  const combinedClassName = `rounded-md bg-card text-card-foreground ${className || ''}`;
  return <div className={combinedClassName} {...props}>{children}</div>;
};

// CardHeader Component
export const CardHeader = ({ children, className, ...props }) => {
  const combinedClassName = `flex flex-col space-y-1.5 p-6 ${className || ''}`;
  return <div className={combinedClassName} {...props}>{children}</div>;
};

// CardTitle Component
export const CardTitle = ({ children, className, ...props }) => {
  const combinedClassName = `text-2xl font-semibold leading-none tracking-tight ${className || ''}`;
  return <h3 className={combinedClassName} {...props}>{children}</h3>;
};

// CardDescription Component
export const CardDescription = ({ children, className, ...props }) => {
  const combinedClassName = `text-sm text-muted-foreground ${className || ''}`;
  return <p className={combinedClassName} {...props}>{children}</p>;
};
