import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';
import { companyInfo } from '../../data/contentData';

export const Navbar = ({ onOpenAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: '3-Pillars', path: '/framework' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand */}
        <Link to="/" className="nav-brand" aria-label="PYCS - Pushpyash Consultancy Services">
          <img src="/logo.jpg" alt="PYCS Logo" className="nav-brand-logo" />
          <div className="nav-brand-text">
            <span className="nav-brand-title">PUSHPYASH</span>
            <span className="nav-brand-subtitle">Consultancy Services</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <ThemeToggle />
          
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenAssessment}
            className="d-none-sm"
          >
            AI Readiness
          </Button>

          <Button
            variant="primary"
            size="sm"
            href="/contact"
            icon={ArrowRight}
          >
            Consult Now
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-header">
          <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo.jpg" alt="PYCS Logo" style={{ height: '38px', borderRadius: '4px' }} />
            <div className="nav-brand-text">
              <span className="nav-brand-title" style={{ fontSize: '1.1rem' }}>PUSHPYASH</span>
              <span className="nav-brand-subtitle" style={{ fontSize: '0.62rem' }}>Consultancy Services</span>
            </div>
          </Link>
          <button
            type="button"
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'text-accent' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
                end={link.path === '/'}
              >
                <span>{link.name}</span>
                <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
              </NavLink>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAssessment();
            }}
          >
            Check AI Readiness Score
          </Button>

          <Button
            variant="primary"
            size="md"
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            icon={ArrowRight}
          >
            Start a Conversation
          </Button>

          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <a href={`tel:${companyInfo.contact.phoneClean}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <PhoneCall size={14} />
              {companyInfo.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
