import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { Services } from '../sections/Services';
import { Button } from '../components/common/Button';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';

export const ServicesPage = ({ onOpenAssessment }) => {
  return (
    <div className="services-page animate-fade-in">
      {/* Page Banner */}
      <PageBanner
        badge="Consulting Services &amp; Capabilities"
        badgeVariant="tech"
        badgeIcon={Layers}
        title="Comprehensive Digital Engineering &amp;"
        titleHighlight="Technology Transformation"
        description="Engineered advisory services designed to eliminate operational data silos, drive Lean process harmonization, and achieve ground-level AI adoption."
        breadcrumbs={[{ label: 'Consulting Services' }]}
      />

      {/* Services Section with Filterable Grid & ISV Ecosystem */}
      <Services onOpenAssessment={onOpenAssessment} />

      {/* Engagement CTA */}
      <section className="section section-alt" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div
            style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Need a Tailored Advisory Scope for Your Enterprise?
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 1.75rem auto', lineHeight: '1.6' }}>
              Whether you require a legacy PLM migration roadmap, an industrial AI Proof of Value, or an empathetic change management framework, our Pune advisory team is ready to assist.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" href="/contact" icon={ArrowRight}>
                Schedule Technical Advisory Call
              </Button>
              <Button variant="secondary" size="lg" onClick={onOpenAssessment} icon={Sparkles} iconPosition="left">
                Check AI Readiness
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
