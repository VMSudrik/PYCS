import React from 'react';
import { Badge } from './Badge';

export const SectionHeader = ({
  eyebrow,
  eyebrowBadge = true,
  eyebrowVariant = 'default',
  title,
  titleHighlight,
  description,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`section-header ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className="section-eyebrow">
          {eyebrowBadge ? (
            <Badge variant={eyebrowVariant}>{eyebrow}</Badge>
          ) : (
            <span className="font-mono text-accent-gradient" style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {title && (
        <h2 className="section-title">
          {title}{' '}
          {titleHighlight && <span className="text-gradient">{titleHighlight}</span>}
        </h2>
      )}

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
};
