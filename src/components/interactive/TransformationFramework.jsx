import React, { useState } from 'react';
import { Cpu, GitBranch, Users, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { transformationPillars } from '../../data/contentData';
import { Badge } from '../common/Badge';

export const TransformationFramework = () => {
  const [activePillarId, setActivePillarId] = useState('technology');

  const icons = {
    technology: Cpu,
    process: GitBranch,
    people: Users
  };

  const activePillar = transformationPillars.find(p => p.id === activePillarId) || transformationPillars[0];
  const ActiveIcon = icons[activePillar.id] || Cpu;

  return (
    <div className="framework-interactive-wrapper">
      {/* 3 Pillar Selector Tabs */}
      <div className="pillars-tab-nav">
        {transformationPillars.map((pillar) => {
          const Icon = icons[pillar.id] || Cpu;
          const isActive = pillar.id === activePillarId;
          return (
            <button
              key={pillar.id}
              type="button"
              className={`pillar-tab-btn ${isActive ? 'active' : ''}`}
              style={{
                '--pillar-color': pillar.color,
                borderColor: isActive ? pillar.color : undefined
              }}
              onClick={() => setActivePillarId(pillar.id)}
            >
              <div
                className="pillar-tab-icon"
                style={{ backgroundColor: pillar.color }}
              >
                <Icon size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                    {pillar.name}
                  </span>
                  {isActive && <Badge variant="default" style={{ fontSize: '0.65rem' }}>Active Focus</Badge>}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {pillar.badge}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Pillar Content Panel */}
      <div className="pillar-content-panel" style={{ borderTop: `4px solid ${activePillar.color}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {/* Left Column: Mission & Description */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: `${activePillar.color}20`, color: activePillar.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ActiveIcon size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  {activePillar.subtitle}
                </h3>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: activePillar.color, fontWeight: 600 }}>
                  Pillar Blueprint: {activePillar.name.toUpperCase()}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: '1.5', marginBottom: '1rem' }}>
              "{activePillar.tagline}"
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              {activePillar.description}
            </p>

            {/* Guaranteed Outcome */}
            <div style={{ background: 'var(--bg-secondary)', borderLeft: `3px solid ${activePillar.color}`, padding: '1rem 1.25rem', borderRadius: '0 8px 8px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <CheckCircle2 size={16} style={{ color: activePillar.color }} />
                <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
                  Measurable Operational Outcome
                </strong>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                {activePillar.outcome}
              </p>
            </div>
          </div>

          {/* Right Column: Key Focus Areas & Synergy Matrix */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} style={{ color: activePillar.color }} />
              Key Core Deliverables & Focus Areas
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {activePillar.focusAreas.map((area, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    background: 'var(--bg-secondary)',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.88rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  <span style={{ color: activePillar.color, fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginTop: '1px' }}>
                    0{index + 1}.
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            {/* Interconnected Synergy Note */}
            <div style={{ background: `${activePillar.color}10`, border: `1px solid ${activePillar.color}35`, borderRadius: '12px', padding: '1rem 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: activePillar.color }}>
                  Tri-Pillar Synergy Dynamic
                </span>
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                {activePillar.synergyWithOthers}
              </p>
            </div>
          </div>
        </div>

        {/* Why All Three Are Essential Diagram */}
        <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
              The PYCS Tri-Pillar Harmonic Law
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#EF4444', fontWeight: 600, marginBottom: '4px' }}>
                <ShieldAlert size={14} />
                <span>Tech + Process (No People)</span>
              </div>
              <span style={{ color: 'var(--text-muted)' }}>Automation anxiety, user sabotage & low adoption.</span>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#F59E0B', fontWeight: 600, marginBottom: '4px' }}>
                <ShieldAlert size={14} />
                <span>Tech + People (No Process)</span>
              </div>
              <span style={{ color: 'var(--text-muted)' }}>Automated confusion, ad-hoc chaos & high scrap.</span>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10B981', fontWeight: 700, marginBottom: '4px' }}>
                <CheckCircle2 size={14} />
                <span>Technology + Process + People</span>
              </div>
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Predictable ROI, human empowerment & enduring Yash (Victory).</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
