import React from 'react';

export const Card = ({
  children,
  className = '',
  interactive = false,
  glass = false,
  borderTopColor,
  onClick,
  ...props
}) => {
  const classes = [
    'card',
    interactive ? 'card-interactive' : '',
    glass ? 'card-glass' : '',
    className
  ].filter(Boolean).join(' ');

  const style = borderTopColor ? { borderTop: `3px solid ${borderTopColor}` } : {};

  return (
    <div className={classes} style={style} onClick={onClick} {...props}>
      {children}
    </div>
  );
};
