import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { Industries } from '../sections/Industries';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Factory, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const IndustriesPage = () => {
  return (
    <div className="industries-page animate-fade-in">
      {/* Page Banner */}
      <PageBanner
        badge="Industry Domain Expertise"
        badgeVariant="process"
        badgeIcon={Factory}
        title="Domain-Specific Engineering for"
        titleHighlight="Heavy Industry Verticals"
        description="Delivering tailored digital thread architectures, Lean harmonization, and Human-Centered AI deployments across mission-critical industrial sectors."
        breadcrumbs={[{ label: 'Industries' }]}
      />

      {/* Interactive Industries Section */}
      <Industries />

      {/* Compliance & Quality Governance Framework */}
      <section className="section bg-grid-pattern">
        <div className="container">
          <SectionHeader
            eyebrow="Regulatory &amp; Quality Rigor"
            eyebrowVariant="tech"
            title="Engineered for Strict"
            titleHighlight="Global Standards"
            description="Our transformation frameworks are designed to meet and exceed the most demanding industrial compliance and quality benchmarks."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            <Card className="card-interactive">
              <span className="badge badge-tech" style={{ marginBottom: '0.75rem' }}>Auto &amp; Mobility</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>IATF 16949 &amp; APQP Compliance</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                Traceable digital threads from initial CAD engineering BOMs to shop-floor MES production execution, ensuring zero-defect quality gates.
              </p>
            </Card>

            <Card className="card-interactive">
              <span className="badge badge-process" style={{ marginBottom: '0.75rem' }}>Aerospace &amp; Defense</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>AS9100 &amp; Multi-Tier BOM</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                End-to-end digital continuity benchmarking, automated configuration management, and audit-proof engineering change records.
              </p>
            </Card>

            <Card className="card-interactive">
              <span className="badge badge-people" style={{ marginBottom: '0.75rem' }}>Life Sciences &amp; MedTech</span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>ISO 13485 &amp; FDA 21 CFR Part 11</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                Integrated ALM/PLM digital design history files (DHF), electronic signatures, and automated validation protocols.
              </p>
            </Card>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button variant="primary" size="lg" href="/contact" icon={ArrowRight}>
              Discuss Your Industry-Specific Requirements
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
