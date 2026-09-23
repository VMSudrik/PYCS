import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { leadershipData } from '../data/contentData';
import { Award, Briefcase, Sparkles, Quote, CheckCircle2, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Leadership = () => {
  return (
    <section id="leadership" className="section bg-grid-pattern">
      <div className="container">
        
        <SectionHeader
          eyebrow="Executive Leadership & Advisory Authority"
          eyebrowVariant="tech"
          title="28+ Years of Tier-One"
          titleHighlight="Digital Engineering Leadership"
          description="Strategic advisory rooted in decades of hands-on engineering product design, global system leadership, and multi-million-dollar digital transformation delivery."
        />

        {/* Leadership Feature Card */}
        <div className="card card-interactive" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', borderRadius: 'var(--radius-xl)', marginBottom: '3.5rem' }}>
          <div className="leadership-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left: Bio & Pedigree */}
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

              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                {leadershipData.summary}
              </p>

              {/* Founder's Philosophy Quote */}
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  borderLeft: '3px solid var(--pycs-cyan-accent)',
                  padding: '1.25rem',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '1.5rem',
                  position: 'relative'
                }}
              >
                <Quote size={20} style={{ color: 'var(--pycs-cyan-accent)', marginBottom: '0.5rem', opacity: 0.7 }} />
                <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>
                  "{leadershipData.philosophyQuote}"
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button variant="primary" size="md" href="/contact">
                  Request Strategic Consultation
                </Button>
                <Button variant="outline" size="md" href="mailto:hiteshbhole@pushpyash.com" icon={Mail} iconPosition="left">
                  Email Advisor
                </Button>
              </div>
            </div>

            {/* Right: Pedigree Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--pycs-cyan-accent)' }} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                    Tier-1 Enterprise Leadership
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

        {/* Verified Pedigree Enterprise Logo Wall */}
        <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)', padding: '2rem 2.5rem', border: '1px solid var(--border-subtle)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
              Executive Career Leadership &amp; Engineering Foundation Across Global Pioneers
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {leadershipData.pedigreeLogos.map((org, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--bg-card)',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                {org}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
