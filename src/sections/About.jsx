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

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ textAlign: 'center' }}
        >
          <motion.div variants={fadeUp} className="section-label" style={{ justifyContent: 'center' }}>About</motion.div>

          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 400, lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '40px',
            fontStyle: 'italic',
          }}>
            Dedicated to crafting clean,
            <br />
            <span style={{ color: 'var(--text-muted)' }}>performant digital experiences.</span>
          </motion.h2>

          <motion.div variants={fadeUp} style={{
            fontSize: '17px', lineHeight: 1.9, color: 'var(--text-muted)',
            marginBottom: '48px',
            maxWidth: '680px',
            margin: '0 auto 48px auto',
            fontWeight: 300,
          }}>
            <p style={{ marginBottom: '24px' }}>
              I am a Software Developer with a strong proficiency in full-stack engineering. 
              My expertise lies in building scalable, user-centric web applications that solve complex problems with elegant code.
            </p>
            <p>
              I thrive at the intersection of robust backend architectures and intuitive frontend experiences. 
              Whether it's optimizing performance, designing clean APIs, or crafting pixel-perfect UIs, I bring a detail-oriented approach to every project.
            </p>
          </motion.div>

          {/* Info layout */}
          <motion.div variants={fadeUp} style={{
            display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap',
            marginBottom: '48px',
          }}>
            {[
              { label: 'Role', value: 'Software Developer' },
              { label: 'Focus', value: 'Full Stack Engineering' },
              { label: 'Location', value: 'India' },
            ].map((info, i) => (
              <div key={i} style={{
                padding: '16px 32px',
                borderBottom: '1px solid var(--border)',
                minWidth: '200px'
              }}>
                <div style={{ fontSize: '11px', color: 'var(--text-subtle)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {info.label}
                </div>
                <div style={{ fontSize: '15px', color: 'var(--text)', fontWeight: 400 }}>{info.value}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <a
              href="https://linkedin.com/in/Jarpula-Pavan"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              style={{
                color: 'var(--text)', fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.05em', textTransform: 'uppercase',
                textDecoration: 'none',
                borderBottom: '1px solid var(--text)',
                paddingBottom: '4px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'transparent'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--text)'; }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pavanjarpula"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              style={{
                color: 'var(--text)', fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.05em', textTransform: 'uppercase',
                textDecoration: 'none',
                borderBottom: '1px solid var(--text)',
                paddingBottom: '4px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'transparent'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--text)'; }}
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
