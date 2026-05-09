import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  { label: 'Email', value: 'mepavaniitkgp@gmail.com', href: 'mailto:mepavaniitkgp@gmail.com', icon: '✉' },
  { label: 'LinkedIn', value: 'linkedin.com/in/Jarpula-Pavan', href: 'https://linkedin.com/in/Jarpula-Pavan', icon: '◈' },
  { label: 'GitHub', value: 'github.com/pavanjarpula', href: 'https://github.com/pavanjarpula', icon: '⬡' },
  { label: 'Phone', value: '+91 6304595065', href: 'tel:+916304595065', icon: '◎' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="contact" style={{ padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
          <h2 className="section-title" style={{ marginBottom: '24px', fontStyle: 'italic', fontWeight: 400 }}>
            Let's Build Something
            <br />
            <span style={{ color: 'var(--text-muted)' }}>Great Together.</span>
          </h2>
          <p style={{
            fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.8,
            marginBottom: '40px', fontWeight: 300,
          }}>
            I'm actively seeking opportunities to contribute to exciting projects and engineering teams.
            Open to collaborations and roles where I can make a meaningful impact.
          </p>
          <a
            href="mailto:mepavaniitkgp@gmail.com"
            data-hover
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '18px 48px',
              background: 'var(--text)',
              border: '1px solid var(--text)',
              color: 'var(--bg)', textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '13px', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--text)'; e.currentTarget.style.color = 'var(--bg)'; }}
          >
            Send me a message
          </a>
        </motion.div>

        {/* Social Links */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px', marginBottom: '100px',
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
                padding: '32px 24px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.3s',
                display: 'block',
              }}
            >
              <div style={{
                fontSize: '24px', marginBottom: '16px',
                color: hoveredIdx === i ? 'var(--text)' : 'var(--text-muted)',
                transition: 'color 0.3s',
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic'
              }}>
                {social.icon}
              </div>
              <div style={{
                fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: '8px',
                fontFamily: 'var(--font-mono)',
              }}>
                {social.label}
              </div>
              <div style={{
                fontSize: '13px',
                color: hoveredIdx === i ? 'var(--text)' : 'var(--text-subtle)',
                transition: 'color 0.3s',
                wordBreak: 'break-all',
                fontWeight: 300
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
    </section>
  );
}
