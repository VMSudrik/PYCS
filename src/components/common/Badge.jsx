import React from 'react';

export const Badge = ({ children, variant = 'default', className = '', icon: Icon }) => {
  const variantClass = variant !== 'default' ? `badge-${variant}` : '';
  return (
    <span className={`badge ${variantClass} ${className}`}>
      {Icon && <Icon size={13} />}
      {children}
    </span>
  );
};
