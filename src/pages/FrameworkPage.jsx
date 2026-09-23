import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { SectionHeader } from '../components/common/SectionHeader';
import { TransformationFramework } from '../components/interactive/TransformationFramework';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Cpu, GitBranch, Users, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const FrameworkPage = ({ onOpenAssessment }) => {
  return (
    <div className="framework-page animate-fade-in">
      {/* Page Banner */}
      <PageBanner
        badge="Transformation Framework"
        badgeVariant="process"
        badgeIcon={Layers}
        title="The Three-Pillar Industrial"
        titleHighlight="Transformation Framework"
        description="Anchoring enterprise evolution in the three synchronized pillars of industrial excellence: Technology, Process, and People."
        breadcrumbs={[{ label: '3-Pillar Framework' }]}
      />

      {/* Interactive Framework Visualizer */}
      <section className="section bg-grid-pattern">
        <div className="container">
          <SectionHeader
            eyebrow="Interactive Pillar Explorer"
            eyebrowVariant="tech"
            title="Explore How the Pillars"
            titleHighlight="Interlock"
            description="Select any pillar below to inspect its core deliverables, operational blueprints, and measurable business outcomes."
          />

          <TransformationFramework />
        </div>
      </section>

      {/* Transformation Maturity Lifecycle */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Maturity Lifecycle"
            eyebrowVariant="process"
            title="The Journey to"
            titleHighlight="Intelligent Autonomy"
            description="How PYCS guides engineering organizations from manual, fragmented operations to self-optimizing autonomous execution."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            
            <Card style={{ borderTop: '3px solid #64748B' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Phase 01
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0', color: 'var(--text-primary)' }}>
                Audit &amp; Harmonization
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Identify operational data silos, assess legacy PLM/MES toolchains, and map out root-cause bottlenecks.
              </p>
            </Card>

            <Card style={{ borderTop: '3px solid #0284C7' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: '#0284C7', fontWeight: 600 }}>
                Phase 02
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0', color: 'var(--text-primary)' }}>
                Digital Thread Integration
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Connect CAD, ALM, PLM, MES, and ERP ecosystems to guarantee digital continuity from design to factory floor.
              </p>
            </Card>

            <Card style={{ borderTop: '3px solid #0D9488' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: '#0D9488', fontWeight: 600 }}>
                Phase 03
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0', color: 'var(--text-primary)' }}>
                Human-Centered AI &amp; OCM
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Deploy targeted AI Proof of Values, upskill floor operators, and eliminate employee automation anxiety.
              </p>
            </Card>

            <Card style={{ borderTop: '3px solid #EA580C' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: '#EA580C', fontWeight: 600 }}>
                Phase 04
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0', color: 'var(--text-primary)' }}>
                Intelligent Autonomy
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Closed-loop telemetry, predictive governance, and self-optimizing manufacturing workflows for lasting market victory.
              </p>
            </Card>

          </div>

          {/* Bottom CTAs */}
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={onOpenAssessment} icon={Sparkles}>
              Test Your Framework Maturity
            </Button>
            <Button variant="outline" size="lg" href="/services">
              View Consulting Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
