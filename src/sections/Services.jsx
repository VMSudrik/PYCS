import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { coreServices, isvEcosystem } from '../data/contentData';
import { Layers, Cpu, Activity, GitMerge, Users, Compass, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Sparkles } from 'lucide-react';

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCardId, setExpandedCardId] = useState(null);

  const icons = {
    Layers: Layers,
    Cpu: Cpu,
    Activity: Activity,
    GitMerge: GitMerge,
    Users: Users,
    Compass: Compass
  };

  const categories = [
    { id: 'all', label: 'All Advisory Areas' },
    { id: 'Enterprise Toolchain', label: 'Enterprise Toolchain' },
    { id: 'Technology Consulting', label: 'Technology Consulting' },
    { id: 'Industry Process', label: 'Industry Process' }
  ];

  const filteredServices = activeCategory === 'all'
    ? coreServices
    : coreServices.filter(s => s.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="services" className="section bg-grid-pattern">
      <div className="container">
        
        <SectionHeader
          eyebrow="Core Advisory & Technical Capabilities"
          eyebrowVariant="tech"
          title="Engineered Services for"
          titleHighlight="Autonomous Execution"
          description="Comprehensive digital engineering and manufacturing technology advisory designed to isolate and eliminate data silos, maximize IT ROI, and scale predictable operational victory."
        />

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`btn btn-sm ${activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {filteredServices.map((service) => {
            const Icon = icons[service.icon] || Layers;
            const isExpanded = expandedCardId === service.id;

            return (
              <Card
                key={service.id}
                className="card-interactive"
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--badge-bg)', color: 'var(--pycs-cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} />
                  </div>
                  <span className="font-mono" style={{ fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                    {service.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', lineHeight: '1.35' }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
                  {service.description}
                </p>

                {/* Deliverables Accordion */}
                <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '0.85rem 1rem', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sparkles size={14} style={{ color: 'var(--pycs-cyan-accent)' }} />
                      Key Deliverables &amp; Scope ({service.deliverables.length})
                    </span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {isExpanded && (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px dashed var(--border-subtle)' }}>
                      {service.deliverables.map((del, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                          <CheckCircle2 size={13} style={{ color: 'var(--pycs-teal)', flexShrink: 0, marginTop: '3px' }} />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Measurable Impact Tag */}
                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Target Outcome:</span>
                  <span style={{ fontWeight: 600, color: 'var(--pycs-cyan-accent)', textAlign: 'right' }}>
                    {service.impact}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* ISV Ecosystem Focus Grid (from ff.jpg) */}
        <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)', padding: 'clamp(2rem, 3vw, 2.5rem)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Badge variant="tech" style={{ marginBottom: '0.5rem' }}>Enterprise Toolchain Depth</Badge>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Mastery Across Tier-1 Software Ecosystems</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
              Deep hands-on integration, Center of Excellence leadership, and migration expertise across the world's leading engineering suites.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {isvEcosystem.map((isv, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {isv.name}
                </div>
                <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--pycs-cyan-accent)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {isv.category}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', lineHeight: '1.4' }}>
                  {isv.highlight}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  "{isv.experience}"
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Button variant="primary" size="md" href="/contact" icon={ArrowRight}>
              Discuss Your Enterprise Toolchain Requirements
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
