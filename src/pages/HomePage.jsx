import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { TrustBar } from '../sections/TrustBar';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { TransformationFramework } from '../components/interactive/TransformationFramework';
import { coreServices, industries, leadershipData } from '../data/contentData';
import { ArrowRight, Sparkles, Layers, Cpu, Activity, HeartHandshake, ShieldCheck, Award, Quote } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section with Live Digital Thread */}
      <Hero />

      {/* Trust & Metrics Bar */}
      <TrustBar />

      {/* About & Philosophy Teaser */}
      <section className="section bg-grid-pattern">
        <div className="container">
          <SectionHeader
            eyebrow="Our Identity & Heritage"
            eyebrowVariant="tech"
            title="Engineering Success through"
            titleHighlight="Empathetic Transformation"
            description="Pushpyash Consultancy Services (PYCS) bridges the critical gap between fast-moving industrial software and human adoption."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            <Card glass className="card-interactive" borderTopColor="#0284C7">
              <span className="badge badge-tech" style={{ marginBottom: '1rem' }}>Pushp (पुष्प)</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>To Blossom &amp; Grow</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Nurturing human capital through empathetic change management so frontline operators flourish alongside advanced automation.
              </p>
            </Card>

            <Card glass className="card-interactive" borderTopColor="#0D9488">
              <span className="badge badge-process" style={{ marginBottom: '1rem' }}>Yash (यश)</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>To Achieve Enduring Victory</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Delivering hard-edged operational results: eliminated data silos, reduced manufacturing costs, and maximized enterprise IT ROI.
              </p>
            </Card>

            <Card glass className="card-interactive" borderTopColor="#EA580C">
              <span className="badge badge-people" style={{ marginBottom: '1rem' }}>Human-Centered AI</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Empowering People</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Deploying AI to absorb repetitive, error-prone tasks so engineers and operators have the bandwidth for high-value innovation.
              </p>
            </Card>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button variant="outline" size="md" href="/about" icon={ArrowRight}>
              Read Our Full Story &amp; Core Values
            </Button>
          </div>
        </div>
      </section>

      {/* Three Pillar Framework Interactive Section */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Transformation Methodology"
            eyebrowVariant="process"
            title="The Three-Pillar"
            titleHighlight="Industrial Framework"
            description="Explore how Technology, Process, and People interlock to prevent project failure and ensure sustainable autonomous execution."
          />

          <TransformationFramework />

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Button variant="primary" size="md" href="/framework" icon={ArrowRight}>
              Explore Complete Framework Details
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="section bg-grid-pattern">
        <div className="container">
          <SectionHeader
            eyebrow="Advisory Scope"
            eyebrowVariant="tech"
            title="Engineered Services for"
            titleHighlight="Digital Excellence"
            description="Comprehensive consulting spanning CAD/PLM/MES integration, Industrial AI deployment, and structural process optimization."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '2.5rem' }}>
            {coreServices.slice(0, 3).map((service) => (
              <Card key={service.id} className="card-interactive" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--pycs-cyan-accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {service.category}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.55', flex: 1, marginBottom: '1.25rem' }}>
                  {service.description}
                </p>
                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--pycs-cyan-accent)' }}>
                  {service.impact}
                </div>
              </Card>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button variant="primary" size="md" href="/services" icon={ArrowRight}>
              View All 6 Core Consulting Offerings
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Sector Domain Expertise"
            eyebrowVariant="process"
            title="Tailored Solutions for"
            titleHighlight="Heavy Industry Verticals"
            description="Domain-specific digital thread architectures and lean compliance across 6 mission-critical sectors."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {industries.map((ind) => (
              <Link
                key={ind.id}
                to="/industries"
                className="card card-interactive"
                style={{ padding: '1.25rem 1rem', textAlign: 'center', textDecoration: 'none' }}
              >
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {ind.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--pycs-cyan-accent)', fontWeight: 600 }}>
                  Explore Playbook →
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button variant="outline" size="md" href="/industries" icon={ArrowRight}>
              Explore All Industry Playbooks
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Highlight Preview */}
      <section className="section bg-grid-pattern">
        <div className="container">
          <div className="card card-interactive" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <Badge variant="tech" icon={Award} style={{ marginBottom: '0.75rem' }}>
                  Founder &amp; Technical Advisor
                </Badge>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                  {leadershipData.name}
                </h3>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--pycs-cyan-accent)', marginBottom: '1rem' }}>
                  28+ Years Tier-1 Digital Engineering Pedigree
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Former systems leader and ENOVIA PLM product development authority across Accenture, Tata Technologies, Capgemini, and Dassault Systèmes.
                </p>
                <Button variant="primary" size="md" href="/about#leadership" icon={ArrowRight}>
                  View Full Leadership Profile &amp; Pedigree
                </Button>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                <Quote size={20} style={{ color: 'var(--pycs-cyan-accent)', marginBottom: '0.5rem', opacity: 0.8 }} />
                <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>
                  "{leadershipData.philosophyQuote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="section section-alt">
        <div className="container">
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
              Ready to Begin Your Industrial Transformation?
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
              Connect with our Pune-based advisory team to chart your path from legacy bottlenecks to intelligent, human-centered autonomy.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                variant="accent"
                size="lg"
                href="/contact"
                icon={ArrowRight}
                style={{ background: '#FFFFFF', color: '#0B2545', fontWeight: 700 }}
              >
                Start a Conversation
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
      </section>
    </div>
  );
};
