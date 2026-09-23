import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
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

  const destination = to || href;

  if (destination) {
    const isExternal =
      destination.startsWith('http') ||
      destination.startsWith('mailto:') ||
      destination.startsWith('tel:') ||
      destination.startsWith('//');

    if (isExternal) {
      return (
        <a
          href={destination}
          className={baseClass}
          target={!destination.startsWith('mailto:') && !destination.startsWith('tel:') ? '_blank' : undefined}
          rel="noopener noreferrer"
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link to={destination} className={baseClass} {...props}>
        {content}
      </Link>
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
