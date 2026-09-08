import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  {
    label: 'Email',
    value: 'mepavaniitkgp@gmail.com',
    href: 'mailto:mepavaniitkgp@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jarpula-pavan',
    href: 'https://www.linkedin.com/in/jarpula-pavan-512ba5259/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/pavanjarpula',
    href: 'https://github.com/pavanjarpula',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 6304595065',
    href: 'tel:+916304595065',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 13.73 19.79 19.79 0 01.88 5.1 2 2 0 012.86 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSend = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/mepavaniitkgp@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" style={{ padding: '80px 0 40px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
          <h2 className="section-title" style={{ marginBottom: '24px', fontStyle: 'italic', fontWeight: 400 }}>
            Let's Build Something
            <br />
            <span style={{ color: 'var(--text-muted)' }}>Great Together.</span>
          </h2>
          <p style={{
            fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.8,
            fontWeight: 300,
          }}>
            I'm actively seeking opportunities to contribute to exciting projects and engineering teams.
            Open to collaborations and roles where I can make a meaningful impact.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSend}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: '640px',
            margin: '0 auto 80px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            padding: '40px',
            borderRadius: '4px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                placeholder="Your name"
                required
                style={{
                  width: '100%', padding: '12px 16px',
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  color: 'var(--text)', fontSize: '14px',
                  fontFamily: 'var(--font-body)',
                  outline: 'none', borderRadius: '2px',
                  transition: 'border-color 0.3s',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div>
              <label style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                placeholder="your@email.com"
                required
                style={{
                  width: '100%', padding: '12px 16px',
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  color: 'var(--text)', fontSize: '14px',
                  fontFamily: 'var(--font-body)',
                  outline: 'none', borderRadius: '2px',
                  transition: 'border-color 0.3s',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              required
              style={{
                width: '100%', padding: '12px 16px',
                background: 'var(--bg)', border: '1px solid var(--border)',
                color: 'var(--text)', fontSize: '14px',
                fontFamily: 'var(--font-body)',
                outline: 'none', borderRadius: '2px',
                resize: 'vertical',
                transition: 'border-color 0.3s',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <button
            type="submit"
            data-hover
            disabled={status === 'sending'}
            style={{
              width: '100%',
              padding: '16px 32px',
              background: status === 'sent' ? 'rgba(76,175,80,0.15)' : status === 'error' ? 'rgba(244,67,54,0.15)' : 'var(--text)',
              border: status === 'sent' ? '1px solid #4CAF50' : status === 'error' ? '1px solid #f44336' : '1px solid var(--text)',
              color: status === 'sent' ? '#4CAF50' : status === 'error' ? '#f44336' : 'var(--bg)',
              fontFamily: 'var(--font-body)',
              fontSize: '13px', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: 'none',
              transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            }}
            onMouseEnter={e => { if (status === 'idle') { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)'; } }}
            onMouseLeave={e => { if (status === 'idle') { e.currentTarget.style.background = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--bg)'; } }}
          >
            {status === 'sending' ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
                Sending...
              </>
            ) : status === 'sent' ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Message Sent!
              </>
            ) : status === 'error' ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                Failed — Try Again
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Send Message
              </>
            )}
          </button>
        </motion.form>

        {/* Social Links */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px', marginBottom: '80px',
        }}>
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              data-hover
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                padding: '24px 20px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.3s',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                borderRadius: '2px',
              }}
            >
              <div style={{
                color: hoveredIdx === i ? 'var(--accent)' : 'var(--text-muted)',
                transition: 'color 0.3s',
                marginBottom: '12px',
              }}>
                {social.icon}
              </div>
              <div style={{
                fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: '6px',
                fontFamily: 'var(--font-mono)',
              }}>
                {social.label}
              </div>
              <div style={{
                fontSize: '11px',
                color: hoveredIdx === i ? 'var(--text)' : 'var(--text-subtle)',
                transition: 'color 0.3s',
                wordBreak: 'break-all',
                fontWeight: 300,
                lineHeight: 1.4,
              }}>
                {social.value}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px', fontWeight: 400,
            letterSpacing: '-0.02em',
            fontStyle: 'italic'
          }}>
            Pavan.
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: 'var(--text-subtle)', letterSpacing: '0.1em',
            textAlign: 'center',
          }}>
            Designed & Built by Jarpula Pavan · 2025
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <button
                key={link}
                data-hover
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'none', border: 'none', cursor: 'none',
                  fontSize: '11px', color: 'var(--text-subtle)',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--text-muted)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-subtle)'}
              >
                {link}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: var(--text-subtle); }
      `}</style>
    </section>
  );
}
