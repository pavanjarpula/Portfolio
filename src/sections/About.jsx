import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '40+', label: 'Technologies' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" style={{ padding: '80px 0 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', left: '-200px', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}>
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <motion.div variants={fadeUp} className="section-label">About</motion.div>
              <motion.h2 variants={fadeUp} style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 400, lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '36px',
                fontStyle: 'italic',
              }}>
                Crafting clean,
                <br />
                <span style={{ color: 'var(--text-muted)' }}>performant</span>
                <br />
                digital experiences.
              </motion.h2>

              {/* IIT Badge on left too for balance */}
              <motion.div variants={fadeUp} style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '10px 16px',
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.25)',
                borderRadius: '4px',
                marginBottom: '32px',
                alignSelf: 'flex-start',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
                  Student at IIT Kharagpur
                </span>
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '24px', marginBottom: '36px', flexWrap: 'wrap' }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '16px' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '30px', fontWeight: 600,
                      color: 'var(--text)', letterSpacing: '-0.02em',
                      fontStyle: 'italic',
                    }}>{s.value}</div>
                    <div style={{
                      fontSize: '10px', color: 'var(--text-subtle)',
                      letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px',
                    }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '24px' }}>
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jarpula-pavan-512ba5259/' },
                  { label: 'GitHub', href: 'https://github.com/pavanjarpula' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    style={{
                      color: 'var(--text)', fontSize: '13px', fontWeight: 500,
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--accent)',
                      paddingBottom: '4px',
                      transition: 'all 0.3s',
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; }}
                  >
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{
                fontSize: '16px', lineHeight: 1.9, color: 'var(--text-muted)',
                fontWeight: 300,
              }}>
                <p style={{ marginBottom: '20px' }}>
                  I am a Software Developer and IIT Kharagpur student passionate about building intelligent, scalable applications at the intersection of web engineering and data science.
                </p>
                <p>
                  I thrive at the crossroads of robust backend architectures and intuitive frontend experiences. Whether it's optimizing performance, designing clean APIs, or crafting pixel-perfect UIs, I bring a detail-oriented approach to every project.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { label: 'Role', value: 'Software Developer' },
                  { label: 'Location', value: 'India' },
                  { label: 'Availability', value: 'Open to Work' },
                  { label: 'Passion', value: 'AI & Data Systems' },
                ].map((info, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ borderColor: 'var(--accent)' }}
                    style={{
                      padding: '18px 20px',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      transition: 'border-color 0.3s',
                      borderRadius: '4px',
                    }}
                  >
                    <div style={{ fontSize: '10px', color: 'var(--text-subtle)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                      {info.label}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 400 }}>{info.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
