import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, PhoneCall, Sparkles, Building2 } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';
import { companyInfo } from '../../data/contentData';
import logoImg from '../../assets/logo.jpg';

export const Navbar = () => {
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

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

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
          <img src={logoImg} alt="PYCS Logo" className="nav-brand-logo" />
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
            variant="primary"
            size="sm"
            href="/contact"
            icon={ArrowRight}
            className="nav-cta-desktop"
          >
            Consult Now
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer rendered via Portal outside header stacking context */}
      {createPortal(
        <>
          <div
            className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden={!mobileMenuOpen}
          />

          <div
            className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
            aria-hidden={!mobileMenuOpen}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div className="mobile-drawer-header">
              <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
                <img src={logoImg} alt="PYCS Logo" style={{ height: '36px', borderRadius: '4px' }} />
                <div className="nav-brand-text">
                  <span className="nav-brand-title" style={{ fontSize: '1.05rem' }}>PUSHPYASH</span>
                  <span className="nav-brand-subtitle" style={{ fontSize: '0.6rem' }}>Consultancy Services</span>
                </div>
              </Link>
              <button
                type="button"
                className="mobile-drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                    end={link.path === '/'}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={16} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <Button
                variant="primary"
                size="md"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                icon={ArrowRight}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Start a Conversation
              </Button>

              <div className="mobile-drawer-contact">
                <a href={`tel:${companyInfo.contact.phoneClean}`} className="mobile-contact-link">
                  <PhoneCall size={15} />
                  <span>{companyInfo.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
};

