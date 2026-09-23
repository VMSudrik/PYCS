import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Layers, TrendingUp, Clock, DollarSign, Cpu, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const StrategicValue = () => {
  const valueDrivers = [
    {
      icon: Layers,
      title: "Enterprise Ecosystem Integration",
      highlight: "Unifying CAD • ALM • PLM • MES • ERP",
      description: "End-to-end integration eliminates data islands, prevents costly BOM discrepancies, and enables closed-loop digital thread continuity from concept to production."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Realized ROI",
      highlight: "Maximizing Existing IT Investments",
      description: "We audit and optimize enterprise software suites so that multi-million-dollar deployments deliver tangible, measurable productivity rather than shelfware."
    },
    {
      icon: DollarSign,
      title: "Manufacturing Cost Reduction",
      highlight: "Lean Workflows & Waste Elimination",
      description: "Root-cause bottleneck elimination and value-stream mapping slash engineering rework, reduce scrap rates, and optimize tooling cycle times."
    },
    {
      icon: Clock,
      title: "Accelerated Deployment Velocity",
      highlight: "From Prototypes to Full Volume",
      description: "Repeatable engineering blueprints allow startups and OEMs to transition from ad-hoc chaos to streamlined, scalable production timelines."
    },
    {
      icon: Cpu,
      title: "Pragmatic Human-Centered AI",
      highlight: "High-Confidence Real-Time POVs",
      description: "Focused AI proof-of-values that solve real floor pain points—absorbing mundane tasks so human workers can focus on high-leverage innovation."
    },
    {
      icon: ShieldCheck,
      title: "Ground-Level User Adoption",
      highlight: "Mitigating Change Fatigue & Friction",
      description: "Empathetic OCM frameworks ensure floor operators and engineers embrace new digital tools with pride, achieving organic, lasting transformation."
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        
        <SectionHeader
          eyebrow="Strategic Value & Operational Impact"
          eyebrowVariant="tech"
          title="Engineering Predictable"
          titleHighlight="Business Impact"
          description="Transforming heavy industry enterprises from fragmented legacy operations into harmonized, self-optimizing, and profitable digital powerhouses."
        />

        {/* Value Drivers Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {valueDrivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <Card key={index} className="card-interactive" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--badge-bg)', color: 'var(--pycs-cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                      {driver.title}
                    </h3>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--pycs-cyan-accent)', fontWeight: 600 }}>
                      {driver.highlight}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0, flex: 1 }}>
                  {driver.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA Banner — replaced assessment with consultation CTA */}
        <div
          style={{
            background: 'var(--grad-primary)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.5rem, 5vw, 3.5rem)',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              Ready to Transform Your Industrial Operations?
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', marginBottom: '2rem' }}>
              Connect with our Pune-based advisory team to discuss your enterprise IT landscape, industrial AI roadmap, or process harmonization requirements.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                variant="accent"
                size="lg"
                href="/contact"
                icon={ArrowRight}
                style={{ background: '#FFFFFF', color: '#0B2545', fontWeight: 700 }}
              >
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/services"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
