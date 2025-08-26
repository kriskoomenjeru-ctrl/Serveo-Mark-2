import React from 'react';
export const GlassCard = ({
  children,
  className = '',
  glowing = false,
  floating = false,
  ...props
}) => {
  return <div className={`
        glass-card p-6 
        ${glowing ? 'orange-glow' : ''} 
        ${floating ? 'floating-animation' : ''}
        ${className}
      `} {...props}>
      {children}
    </div>;
};