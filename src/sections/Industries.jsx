import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { industries } from '../data/contentData';
import { Car, Plane, Cpu, Zap, HeartPulse, Package, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Industries = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState(industries[0].id);

  const icons = {
    Car: Car,
    Plane: Plane,
    Cpu: Cpu,
    Zap: Zap,
    HeartPulse: HeartPulse,
    Package: Package
  };

  const selectedIndustry = industries.find(ind => ind.id === selectedIndustryId) || industries[0];
  const SelectedIcon = icons[selectedIndustry.icon] || Car;

  return (
    <section id="industries" className="section section-alt">
      <div className="container">
        
        <SectionHeader
          eyebrow="Sector Domain Fluency"
          eyebrowVariant="process"
          title="Industry-Specific"
          titleHighlight="Engineering Expertise"
          description="Tailored digital thread architectures, Lean harmonization, and Human-Centered AI deployments across mission-critical industrial sectors."
        />

        {/* Industry Selector Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {industries.map((ind) => {
            const Icon = icons[ind.icon] || Car;
            const isSelected = ind.id === selectedIndustryId;

            return (
              <button
                key={ind.id}
                type="button"
                className={`card card-interactive ${isSelected ? 'selected' : ''}`}
                style={{
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--pycs-cyan-accent)' : undefined,
                  background: isSelected ? 'var(--bg-card)' : 'var(--bg-secondary)',
                  boxShadow: isSelected ? 'var(--shadow-glow)' : undefined
                }}
                onClick={() => setSelectedIndustryId(ind.id)}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: isSelected ? 'var(--pycs-cyan-accent)' : 'var(--badge-bg)',
                    color: isSelected ? '#FFFFFF' : 'var(--pycs-cyan-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.6rem auto',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <Icon size={19} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: '1.3' }}>
                  {ind.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Feature Detail Box */}
        <div
          className="card"
          style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderLeft: '4px solid var(--pycs-cyan-accent)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            
            {/* Left: Summary */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--badge-bg)', color: 'var(--pycs-cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SelectedIcon size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                    {selectedIndustry.title}
                  </h3>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--pycs-cyan-accent)', fontWeight: 600 }}>
                    Tailored PYCS Transformation Playbook
                  </span>
                </div>
              </div>

              {/* Primary Challenge */}
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#EF4444', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  <AlertCircle size={15} />
                  <span>Sector Challenge &amp; Bottlenecks</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                  {selectedIndustry.challenges}
                </p>
              </div>

              {/* PYCS Solution */}
              <div style={{ background: 'var(--badge-bg)', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--badge-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--pycs-cyan-accent)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={15} />
                  <span>PYCS Engineered Solution</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0, lineHeight: '1.5', fontWeight: 500 }}>
                  {selectedIndustry.solutions}
                </p>
              </div>
            </div>

            {/* Right: Operational Victory & Consultation */}
            <div style={{ background: 'var(--bg-secondary)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <span className="badge badge-tech" style={{ marginBottom: '0.75rem' }}>Quantifiable Impact</span>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Realized Value &amp; Operational Victory
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {selectedIndustry.impact}
              </p>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                <Button
                  variant="primary"
                  size="md"
                  href="/contact"
                  icon={ArrowRight}
                  style={{ width: '100%' }}
                >
                  Consult on {selectedIndustry.title}
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
