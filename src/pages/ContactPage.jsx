import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { Contact } from '../sections/Contact';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { companyInfo } from '../data/contentData';
import { Mail, Phone, MapPin, ArrowUpRight, MessageSquare, Clock } from 'lucide-react';
import { Button } from '../components/common/Button';

export const ContactPage = () => {
  return (
    <div className="contact-page animate-fade-in">
      {/* Page Banner */}
      <PageBanner
        badge="Direct Technical Advisory Office"
        badgeVariant="tech"
        badgeIcon={Mail}
        title="Start Your Transformation"
        titleHighlight="Conversation"
        description="Connect with our Technical Advisory team in Chinchwad, Pune. Let us discuss your CAD/PLM/MES landscape, industrial AI adoption roadmap, or process optimization goals."
        breadcrumbs={[{ label: 'Contact & Advisory' }]}
      />

      {/* Main Contact Section */}
      <Contact />

      {/* Pune Geographic Corridor Highlight */}
      <section className="section section-alt" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ background: 'var(--bg-card)', padding: '2rem 2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--pycs-cyan-accent)', fontWeight: 700, textTransform: 'uppercase' }}>
                Strategic Location
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0.25rem 0 0.75rem 0', color: 'var(--text-primary)' }}>
                Located in India's Premier Industrial Auto Hub
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                Situated in Chinchwad, Pune, PYCS is positioned at the heart of Maharashtra's premier automotive, engineering, and manufacturing corridor—enabling high-touch, ground-level engagement with OEMs, Tier-1 suppliers, and engineering innovators.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <Clock size={16} style={{ color: 'var(--pycs-cyan-accent)' }} />
                <span>Advisory Office Hours: Mon - Sat, 9:00 AM – 7:00 PM IST</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} style={{ color: 'var(--pycs-cyan-accent)' }} />
                <span>Sector 18, Shivtej Nagar, Chinchwad, Pune - 411019</span>
              </div>
              <div style={{ paddingTop: '0.5rem' }}>
                <a
                  href={companyInfo.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Open Directions on Google Maps</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
