import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Cpu, GitBranch, Users } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { DigitalThreadVisualizer } from '../components/interactive/DigitalThreadVisualizer';
import { companyInfo } from '../data/contentData';

export const Hero = ({ onOpenAssessment }) => {
  return (
    <section id="home" className="section bg-grid-pattern bg-circuit-overlay" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(4rem, 8vw, 6.5rem)' }}>
      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Headline & Value Proposition */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <Badge variant="tech" icon={Sparkles}>
                B2B Industrial Advisory
              </Badge>
              <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Pune • Global Reach
              </span>
            </div>

            <h1 style={{ marginBottom: '1.25rem', lineHeight: '1.15' }}>
              Digital Engineering &amp;{' '}
              <span className="text-gradient">Manufacturing Technology</span> Transformation
            </h1>

            <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '1rem' }}>
              Industrial AI Adoption, Process Optimization &amp; Change Management
            </p>

            <p style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.75rem' }}>
              We bridge the critical execution gap between complex enterprise IT (CAD, PLM, MES, ERP) and human adoption. Anchoring every industrial shift in the three core pillars of excellence: <strong>Technology</strong>, <strong>Process</strong>, and <strong>People</strong>.
            </p>

            {/* Core Positioning Highlight */}
            <div style={{ background: 'var(--badge-bg)', borderLeft: '3px solid var(--pycs-cyan-accent)', padding: '0.75rem 1.25rem', borderRadius: '0 8px 8px 0', marginBottom: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontStyle: 'italic', fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                "{companyInfo.corePositioning}"
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-group flex items-center gap-4" style={{ flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                icon={ArrowRight}
              >
                Start a Conversation
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenAssessment}
                icon={Cpu}
                iconPosition="left"
              >
                Check AI Readiness
              </Button>
            </div>

            {/* Micro Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(2, 132, 199, 0.12)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cpu size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Technology</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>CAD • PLM • MES • AI</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(13, 148, 136, 0.12)', color: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GitBranch size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Process</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Lean • Blueprint Scale</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(234, 88, 12, 0.12)', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>People</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Empathetic OCM</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Digital Thread Architecture */}
          <div>
            <DigitalThreadVisualizer />
          </div>

        </div>
      </div>
    </section>
  );
};
