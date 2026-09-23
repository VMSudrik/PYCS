import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { companyInfo } from '../data/contentData';
import logoImg from '../assets/logo.jpg';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, ArrowUpRight, Clock, Building, Sparkles } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    industry: 'Automotive & Transportation',
    advisoryArea: 'Enterprise Application Assessment & Adoption',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission and construct mailto fallback
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section bg-grid-pattern">
      <div className="container">
        
        <SectionHeader
          eyebrow="Initiate Advisory Engagement"
          eyebrowVariant="tech"
          title="Start Your Transformation"
          titleHighlight="Conversation"
          description="Connect directly with our Technical Advisory team in Pune to discuss your enterprise IT landscape, industrial AI roadmap, or process harmonization requirements."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          
          {/* Left Column: Official Contact Card & Location Info */}
          <div>
            <Card style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <img src={logoImg} alt="PYCS" style={{ height: '44px', borderRadius: '4px' }} />
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                    PushpYash Consultancy Services
                  </h3>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--pycs-cyan-accent)', fontWeight: 600 }}>
                    Pune Technical Advisory Office
                  </span>
                </div>
              </div>

              {/* Contact Details List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                
                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--badge-bg)', color: 'var(--pycs-cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Headquarters Address</div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '2px 0 6px 0', lineHeight: '1.5' }}>
                      {companyInfo.contact.address}
                    </p>
                    <a
                      href={companyInfo.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.82rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--pycs-cyan-accent)' }}
                    >
                      <span>View on Google Maps</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Direct Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--badge-bg)', color: 'var(--pycs-cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Direct Phone / Mobile</div>
                    <a
                      href={`tel:${companyInfo.contact.phoneClean}`}
                      style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', margin: '2px 0' }}
                    >
                      {companyInfo.contact.phone}
                    </a>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Monday to Saturday • 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--badge-bg)', color: 'var(--pycs-cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Official Email</div>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--pycs-cyan-accent)', display: 'block', margin: '2px 0' }}
                    >
                      {companyInfo.contact.email}
                    </a>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Response time within 24 business hours</span>
                  </div>
                </div>

              </div>

              {/* Direct Quick WhatsApp Action */}
              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <Button
                  variant="outline"
                  size="md"
                  href={companyInfo.contact.whatsAppUrl}
                  icon={MessageSquare}
                  iconPosition="left"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Quick Connect via WhatsApp
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div>
            <Card style={{ padding: '2rem' }}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                      Request Technical Advisory Session
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                      Share your current engineering or manufacturing challenges.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        className="form-input"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="workEmail">Work Email *</label>
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        required
                        placeholder="e.g. name@company.com"
                        className="form-input"
                        value={formData.workEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone / Mobile</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company / Organization *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        placeholder="e.g. Precision Auto OEM"
                        className="form-input"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="industry">Industry Vertical</label>
                      <select
                        id="industry"
                        name="industry"
                        className="form-select"
                        value={formData.industry}
                        onChange={handleChange}
                      >
                        <option value="Automotive & Transportation">Automotive & Transportation</option>
                        <option value="Aerospace & Defense Tech">Aerospace & Defense Tech</option>
                        <option value="High Tech & Advanced Electronics">High Tech & Electronics</option>
                        <option value="Energy, Grid & Utilities">Energy, Grid & Utilities</option>
                        <option value="Life Sciences & Medical Devices">Life Sciences & MedTech</option>
                        <option value="Consumer Goods & Retail">Consumer Goods & Retail</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="advisoryArea">Primary Advisory Focus</label>
                      <select
                        id="advisoryArea"
                        name="advisoryArea"
                        className="form-select"
                        value={formData.advisoryArea}
                        onChange={handleChange}
                      >
                        <option value="Enterprise Application Assessment">CAD/PLM/MES Integration</option>
                        <option value="Industrial AI Adoption">Industrial AI & Human-Centered AI</option>
                        <option value="Smart Factory Automation">Smart Factory IoT & Telemetry</option>
                        <option value="Process Optimization">Process Optimization & Lean</option>
                        <option value="Empathetic Change Management">Empathetic Change (OCM)</option>
                        <option value="Intelligent Autonomy">Intelligent Autonomy Readiness</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Key Objective or Operational Bottleneck</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Please outline your current toolchain (e.g. Dassault / Siemens), migration plans, or AI proof-of-value goals..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    style={{ width: '100%' }}
                  >
                    Submit Advisory Request
                  </Button>
                </form>
              ) : (
                /* Confirmation Screen */
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    Inquiry Received Successfully
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.fullName}</strong>. Your consultation request for <strong>{formData.company}</strong> has been logged. Technical Advisor Hitesh Bhole will review your inquiry and connect with you shortly.
                  </p>

                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Inquiry
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      href={`mailto:${companyInfo.contact.email}?subject=Advisory%20Inquiry%20from%20${encodeURIComponent(formData.fullName)}&body=Company:%20${encodeURIComponent(formData.company)}%0AIndustry:%20${encodeURIComponent(formData.industry)}%0AFocus:%20${encodeURIComponent(formData.advisoryArea)}%0A%0A${encodeURIComponent(formData.message)}`}
                    >
                      Direct Email Backup
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
