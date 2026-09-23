import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { companyInfo } from '../data/contentData';
import { Headphones, Handshake, ShieldCheck, Cpu, Sparkles, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';

export const About = () => {
  const valueIcons = {
    listening: Headphones,
    winwin: Handshake,
    commitment: ShieldCheck,
    adaptability: Cpu
  };

  return (
    <section id="about" className="section bg-grid-pattern">
      <div className="container">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="Company Philosophy & Heritage"
          eyebrowVariant="tech"
          title="Bridging the Execution Gap in"
          titleHighlight="Industrial Evolution"
          description="Pushpyash Consultancy Services (PYCS) helps established industrial leaders as well as fast-scaling engineering startups navigate the complex journey toward Intelligent Autonomy and autonomous execution."
        />

        {/* Origin of Pushp + Yash */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          
          <Card glass className="card-interactive" borderTopColor="#0284C7">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(2, 132, 199, 0.12)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem' }}>
                पु
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>Pushp (पुष्प)</h3>
                <span className="font-mono" style={{ fontSize: '0.78rem', color: '#0284C7', fontWeight: 600 }}>
                  To Blossom &amp; Flourish
                </span>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Represents organic, sustainable growth where technology nurtures your frontline workers and organizational culture rather than causing friction or displacement.
            </p>
          </Card>

          <Card glass className="card-interactive" borderTopColor="#0D9488">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(13, 148, 136, 0.12)', color: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem' }}>
                य
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>Yash (यश)</h3>
                <span className="font-mono" style={{ fontSize: '0.78rem', color: '#0D9488', fontWeight: 600 }}>
                  To Achieve Enduring Victory
                </span>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Represents concrete, bottom-line business success—measurable ROI on enterprise IT investments, reduced manufacturing costs, and lasting operational excellence.
            </p>
          </Card>

        </div>

        {/* Narrative Feature Box: The Human-Centered AI Philosophy */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '4rem',
            position: 'relative'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <Badge variant="people" icon={HeartHandshake} style={{ marginBottom: '1rem' }}>
                Human-Centered Collaboration
              </Badge>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Why Industrial Technology Fails (And How We Fix It)
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Whether a legacy OEM is modernizing deeply rooted infrastructure or a new-age startup is rapidly scaling production, technology deployment often stalls. It rarely fails because the systems break; <strong>it fails because the human and organizational frameworks drop out of alignment</strong>.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                At PYCS, we approach change by transitioning <strong>Human-Centered AI (HAI)</strong> from a purely technical feat into a tool designed for true human enhancement. We build systems where advanced AI absorbs repetitive, error-prone tasks to empower frontline workers, while giving leadership the empathetic care and cognitive bandwidth to lead sustainable transformation.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} style={{ color: 'var(--pycs-cyan-accent)' }} />
                Our Strategic Mission
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {companyInfo.mission.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--pycs-teal)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Value Pillars Grid */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <Badge variant="tech" style={{ marginBottom: '0.5rem' }}>Core Value Pillars</Badge>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>The Four Pillars of PYCS Integrity</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {companyInfo.valuePillars.map((pillar) => {
              const Icon = valueIcons[pillar.id] || ShieldCheck;
              return (
                <Card key={pillar.id} className="card-interactive" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'var(--badge-bg)', color: 'var(--pycs-cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Icon size={20} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {pillar.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
