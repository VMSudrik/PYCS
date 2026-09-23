import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { companyInfo } from '../../data/contentData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src="/logo.jpg" alt="PYCS Logo" style={{ height: '44px', borderRadius: '4px' }} />
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)', display: 'block' }}>
                  PUSHPYASH
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--pycs-cyan-accent)' }}>
                  Consultancy Services
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Engineering Success through Empathetic Transformation. Guiding industrial leaders and scaling startups from legacy bottlenecks to intelligent, human-centered autonomy.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} style={{ color: 'var(--pycs-teal)' }} />
                <span>Tier-1 Enterprise Toolchain Fluency</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HeartHandshake size={16} style={{ color: 'var(--pycs-orange)' }} />
                <span>Human-Centered Collaboration (HAI)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About PYCS &amp; Leadership</Link></li>
              <li><Link to="/framework" className="footer-link">3-Pillar Framework</Link></li>
              <li><Link to="/services" className="footer-link">Consulting Services</Link></li>
              <li><Link to="/industries" className="footer-link">Industry Verticals</Link></li>
              <li><Link to="/contact" className="footer-link">Contact &amp; Pune Office</Link></li>
            </ul>
          </div>

          {/* Col 3: Transformation Pillars */}
          <div>
            <h4 className="footer-heading">Transformation</h4>
            <ul className="footer-links">
              <li><Link to="/framework" className="footer-link">Technology (Digital Thread)</Link></li>
              <li><Link to="/framework" className="footer-link">Process (Lean &amp; Blueprint)</Link></li>
              <li><Link to="/framework" className="footer-link">People (Empathetic OCM)</Link></li>
              <li><Link to="/services" className="footer-link">Industrial AI &amp; HAI</Link></li>
              <li><Link to="/services" className="footer-link">CAD / PLM / MES / ERP</Link></li>
              <li><Link to="/services" className="footer-link">Intelligent Autonomy</Link></li>
            </ul>
          </div>

          {/* Col 4: Official Contact Details */}
          <div>
            <h4 className="footer-heading">Pune Headquarters</h4>
            <ul className="footer-links" style={{ gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} style={{ color: 'var(--pycs-cyan-accent)', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {companyInfo.contact.address}
                </span>
              </li>

              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} style={{ color: 'var(--pycs-cyan-accent)', flexShrink: 0 }} />
                <a href={`tel:${companyInfo.contact.phoneClean}`} className="footer-link">
                  {companyInfo.contact.phone}
                </a>
              </li>

              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} style={{ color: 'var(--pycs-cyan-accent)', flexShrink: 0 }} />
                <a href={`mailto:${companyInfo.contact.email}`} className="footer-link">
                  {companyInfo.contact.email}
                </a>
              </li>

              <li style={{ marginTop: '0.5rem' }}>
                <a
                  href={companyInfo.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Open on Google Maps</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {currentYear} {companyInfo.legalName}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>Pune, Maharashtra, India</span>
            <span>•</span>
            <span style={{ fontStyle: 'italic' }}>Transform your operations. Empower your people. Achieve your victory.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
