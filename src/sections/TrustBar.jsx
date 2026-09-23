import React from 'react';
import { isvEcosystem, strategicImpactStats } from '../data/contentData';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TrustBar = () => {
  return (
    <section className="section-alt" style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Metric Highlights */}
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {strategicImpactStats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-xs)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '0.25rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--pycs-cyan-accent)', lineHeight: 1 }}>
                  {stat.value}
                </span>
                <span className="font-mono" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  {stat.unit}
                </span>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* ISV Ecosystem Toolchain Focus */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px dashed var(--border-medium)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={18} style={{ color: 'var(--pycs-cyan-accent)' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-primary)' }}>
              Tier-1 Enterprise ISV Ecosystem Fluency
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {isvEcosystem.map((isv, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}
              >
                <CheckCircle2 size={13} style={{ color: 'var(--pycs-teal)' }} />
                <span>{isv.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
