import React from 'react';
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-xl font-medium transition-all duration-300 flex items-center justify-center';
  const variantClasses = {
    primary: 'orange-gradient text-white hover:shadow-lg orange-glow-hover',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white orange-glow-hover',
    outline: 'border border-orange-500 text-orange-500 hover:bg-orange-500/10 orange-glow-hover',
    glass: 'glass-effect hover:bg-gray-800/70 orange-glow-hover'
  };
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  return <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </button>;
};