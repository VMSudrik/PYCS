import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseClass = `btn btn-${variant} ${size !== 'md' ? `btn-${size}` : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    return (
      <a
        href={href}
        className={baseClass}
        target={isExternal && !href.startsWith('mailto:') && !href.startsWith('tel:') ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
