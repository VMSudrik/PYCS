import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Badge } from './Badge';

export const PageBanner = ({
  badge,
  badgeVariant = 'tech',
  badgeIcon,
  title,
  titleHighlight,
  description,
  breadcrumbs = []
}) => {
  return (
    <section
      className="page-banner bg-grid-pattern bg-circuit-overlay"
      style={{
        paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.25rem' }}>
          <ol style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', listStyle: 'none', fontSize: '0.82rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <Home size={14} />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ChevronRight size={13} style={{ color: 'var(--text-light)' }} />
                {crumb.to ? (
                  <Link to={crumb.to} style={{ color: 'var(--text-muted)' }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--pycs-cyan-accent)', fontWeight: 600 }}>
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Eyebrow / Badge */}
        {badge && (
          <div style={{ marginBottom: '0.85rem' }}>
            <Badge variant={badgeVariant} icon={badgeIcon}>
              {badge}
            </Badge>
          </div>
        )}

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)', maxWidth: '900px', lineHeight: '1.2' }}>
          {title}{' '}
          {titleHighlight && <span className="text-gradient">{titleHighlight}</span>}
        </h1>

        {/* Description */}
        {description && (
          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.65', margin: 0 }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
};
