import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { companyInfo, leadershipData, strategicImpactStats } from '../data/contentData';
import {
  Headphones,
  Handshake,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Award,
  Quote,
  Layers,
  TrendingUp,
  DollarSign,
  Clock,
  Mail,
  UserCheck
} from 'lucide-react';

export const AboutPage = ({ onOpenAssessment }) => {
  const valueIcons = {
    listening: Headphones,
    winwin: Handshake,
    commitment: ShieldCheck,
    adaptability: Cpu
  };

  const strategicDrivers = [
    {
      icon: Layers,
      title: "Enterprise Ecosystem Integration",
      highlight: "Unifying CAD • ALM • PLM • MES • ERP",
      description: "Isolating and eliminating data silos to create a continuous digital thread from product design down to shop-floor machine telemetry."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Realized ROI",
      highlight: "Maximizing IT Investments",
      description: "Auditing and optimizing enterprise toolchains so that multi-million-dollar software deployments deliver predictable productivity instead of shelfware."
    },
    {
      icon: DollarSign,
      title: "Manufacturing Cost Reduction",
      highlight: "Lean Workflows & Scrap Elimination",
      description: "Root-cause bottleneck elimination and value-stream mapping slash engineering rework, optimize tooling, and reduce scrap rates."
    },
    {
      icon: Clock,
      title: "Accelerated Deployment Velocity",
      highlight: "From Prototypes to Full Volume",
      description: "Repeatable engineering blueprints allow startups and OEMs to replace ad-hoc chaos with predictable, scalable manufacturing blueprints."
    }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* Page Banner */}
      <PageBanner
        badge="About Pushpyash Consultancy Services"
        badgeVariant="tech"
        badgeIcon={Building2}
        title="Engineering Success Through"
        titleHighlight="Empathetic Transformation"
        description="Pushpyash Consultancy Services (PYCS) helps established industrial leaders and fast-scaling engineering startups navigate the complex journey toward Intelligent Autonomy and autonomous execution."
        breadcrumbs={[{ label: 'About PYCS' }]}
      />

      {/* Main Philosophy & Sanskrit Heritage */}
      <section className="section bg-grid-pattern">
        <div className="container">
          
          <SectionHeader
            eyebrow="The Heritage of Pushp &amp; Yash"
            eyebrowVariant="process"
            title="Rooted in Growth,"
            titleHighlight="Dedicated to Victory"
            description="Our name reflects our operational core: nurturing your organization to blossom while delivering tangible, victorious business results."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            
            <Card glass className="card-interactive" borderTopColor="#0284C7">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.12)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.3rem' }}>
                  पु
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>Pushp (पुष्प)</h3>
                  <span className="font-mono" style={{ fontSize: '0.8rem', color: '#0284C7', fontWeight: 600 }}>
                    To Blossom, Grow &amp; Flourish
                  </span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                We believe that true industrial excellence cannot be forced through top-down mandates. Like a blossoming flower, genuine transformation requires nurturing your workforce with empathetic care, psychological safety, and clear upskilling.
              </p>
            </Card>

            <Card glass className="card-interactive" borderTopColor="#0D9488">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(13, 148, 136, 0.12)', color: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.3rem' }}>
                  य
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>Yash (यश)</h3>
                  <span className="font-mono" style={{ fontSize: '0.8rem', color: '#0D9488', fontWeight: 600 }}>
                    To Achieve Success &amp; Enduring Victory
                  </span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                Transformation must culminate in measurable, bottom-line success. We deliver the structural blueprints, enterprise integrations, and lean processes that maximize realized IT ROI, slash cycle times, and secure your competitive market victory.
              </p>
            </Card>

          </div>

          {/* Problem & Approach Deep-Dive */}
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              marginBottom: '3.5rem'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <Badge variant="people" icon={HeartHandshake} style={{ marginBottom: '1rem' }}>
                  Human-Centered Collaboration
                </Badge>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  Bridging the Execution Gap
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                  Whether a legacy OEM is modernizing deeply rooted infrastructure or a new-age startup is rapidly scaling production, technology deployment often stalls. It rarely fails because the systems break; <strong>it fails because the human and organizational frameworks drop out of alignment</strong>. We bridge that critical gap.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                  We approach change by transitioning <strong>Human-Centered AI (HAI)</strong> from a purely technical feat into a tool designed for true human enhancement. Through Human-Centered Collaboration, we build systems where advanced AI doesn't replace frontline workers, but rather empowers them—giving leadership the empathetic bandwidth required to manage deep industrial evolution.
                </p>
              </div>

              <div style={{ background: 'var(--bg-card)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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

          {/* The Four Core Values */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <Badge variant="tech" style={{ marginBottom: '0.5rem' }}>Our Operating Tenets</Badge>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>The Four Value Pillars of PYCS</h3>
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

      {/* LEADERSHIP & TIER-1 PEDIGREE SECTION (Integrated) */}
      <section id="leadership" className="section section-alt" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          
          <SectionHeader
            eyebrow="Executive Leadership &amp; Advisory Authority"
            eyebrowVariant="tech"
            title="28+ Years of Tier-One"
            titleHighlight="Digital Engineering Pedigree"
            description="Strategic advisory rooted in decades of hands-on engineering product design, global system leadership, and multi-million-dollar digital transformation delivery."
          />

          {/* Leadership Profile Card */}
          <div className="card card-interactive" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', borderRadius: 'var(--radius-xl)', marginBottom: '3rem' }}>
            <div className="leadership-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
              
              {/* Left: Bio & Philosophy */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <Badge variant="tech" icon={Award}>
                    Founder &amp; Technical Advisor
                  </Badge>
                  <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--pycs-cyan-accent)', fontWeight: 600 }}>
                    28+ Years Global Pedigree
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.3rem)', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                  {leadershipData.name}
                </h3>

                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--pycs-cyan-accent)', marginBottom: '1.25rem' }}>
                  {leadershipData.specialization}
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  {leadershipData.summary}
                </p>

                {/* Founder's Philosophy Quote */}
                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    borderLeft: '3px solid var(--pycs-cyan-accent)',
                    padding: '1.25rem',
                    borderRadius: '0 8px 8px 0',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Quote size={20} style={{ color: 'var(--pycs-cyan-accent)', marginBottom: '0.5rem', opacity: 0.7 }} />
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>
                    "{leadershipData.philosophyQuote}"
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" size="md" href="/contact">
                    Request Consultation with Founder
                  </Button>
                  <Button variant="outline" size="md" href="mailto:hiteshbhole@pushpyash.com" icon={Mail} iconPosition="left">
                    Direct Email
                  </Button>
                </div>
              </div>

              {/* Right: Tier-1 Career Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <ShieldCheck size={18} style={{ color: 'var(--pycs-cyan-accent)' }} />
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                      Tier-One Pedigree &amp; Track Record
                    </h4>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {leadershipData.tierOnePedigree.map((item, idx) => (
                      <div key={idx} style={{ paddingBottom: idx !== leadershipData.tierOnePedigree.length - 1 ? '0.85rem' : 0, borderBottom: idx !== leadershipData.tierOnePedigree.length - 1 ? '1px dashed var(--border-subtle)' : 'none' }}>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {item.company}
                        </div>
                        <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--pycs-cyan-accent)', marginBottom: '0.25rem' }}>
                          {item.role}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Pedigree Logo Wall */}
          <div style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-xl)', padding: '2rem 2.5rem', border: '1px solid var(--border-subtle)' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                Executive Leadership &amp; Engineering Foundation Across Global Pioneers
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              {leadershipData.pedigreeLogos.map((org, index) => (
                <div
                  key={index}
                  style={{
                    background: 'var(--bg-secondary)',
                    padding: '0.65rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}
                >
                  {org}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* STRATEGIC VALUE & OPERATIONAL IMPACT SECTION (Integrated) */}
      <section id="strategic-value" className="section bg-grid-pattern">
        <div className="container">
          
          <SectionHeader
            eyebrow="Strategic Value &amp; Quantifiable Impact"
            eyebrowVariant="tech"
            title="Engineering Predictable"
            titleHighlight="Business Victory"
            description="Our proven methodologies systematically isolate and eliminate data silos, reduce manufacturing costs, slash deployment timelines, and maximize bottom-line profitability."
          />

          {/* Strategic Drivers Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '3.5rem' }}>
            {strategicDrivers.map((driver, index) => {
              const Icon = driver.icon;
              return (
                <Card key={index} className="card-interactive" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--badge-bg)', color: 'var(--pycs-cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                        {driver.title}
                      </h4>
                      <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--pycs-cyan-accent)', fontWeight: 600 }}>
                        {driver.highlight}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.55', margin: 0, flex: 1 }}>
                    {driver.description}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Diagnostic Assessment Banner */}
          <div
            style={{
              background: 'var(--grad-primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2.5rem, 5vw, 3.5rem)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              Benchmark Your Industrial AI &amp; IT Maturity
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
              Take our 2-minute diagnostic to score your organization across the autonomy curve and receive targeted advisory recommendations.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {onOpenAssessment && (
                <Button
                  variant="accent"
                  size="lg"
                  onClick={onOpenAssessment}
                  icon={Sparkles}
                  style={{ background: '#FFFFFF', color: '#0B2545', fontWeight: 700 }}
                >
                  Launch 2-Min Readiness Assessment
                </Button>
              )}
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}
              >
                Schedule Direct Consultation
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
