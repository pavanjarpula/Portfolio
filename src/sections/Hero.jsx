import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 48px',
      }}
    >
      {/* Glow orb */}
      <div style={{
        position: 'absolute', width: '800px', height: '800px',
        borderRadius: '50%', background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', opacity: 0.5
      }} />

      <div className="container" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Text content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ paddingTop: '80px' }}
          >
            <motion.h1 variants={item} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 6vw, 90px)',
              fontWeight: 400, lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              fontStyle: 'italic',
            }}>
              <span style={{ color: 'var(--text)' }}>Software Developer</span>
            </motion.h1>

            <motion.div variants={item} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 400, lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '32px',
              color: 'var(--text-muted)'
            }}>
              & Full Stack Engineer
            </motion.div>

            <motion.p variants={item} style={{
              fontSize: '18px', lineHeight: 1.8,
              color: 'var(--text-muted)', maxWidth: '480px',
              marginBottom: '48px',
              fontWeight: 300
            }}>
              Hi, I'm Jarpula Pavan. I build high-performance, elegant web applications with modern tech, blending sophisticated design with robust engineering.
            </motion.p>

            <motion.div variants={item} style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <button
                data-hover
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '16px 40px',
                  background: 'var(--text)',
                  border: 'none',
                  borderRadius: '2px',
                  color: 'var(--bg)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px', fontWeight: 600,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  cursor: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Selected Work
              </button>

              <a
                href="mailto:mepavaniitkgp@gmail.com"
                data-hover
                style={{
                  padding: '16px 40px',
                  background: 'transparent',
                  border: '1px solid var(--border-hover)',
                  borderRadius: '2px',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px', fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; }}
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Photo content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '4/5',
              position: 'relative',
            }}>
              {/* Image Frame */}
              <div style={{
                position: 'absolute', inset: 0,
                border: '1px solid var(--border)',
                transform: 'translate(-16px, 16px)',
                zIndex: 0
              }} />
              
              <div style={{
                position: 'relative', zIndex: 1,
                width: '100%', height: '100%',
                overflow: 'hidden',
                background: 'var(--surface)',
              }}>
                <img
                  src="/profile.jpg"
                  alt="Jarpula Pavan"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'grayscale(60%) contrast(1.1) brightness(0.9)',
                    transition: 'filter 0.5s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%) contrast(1) brightness(1)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(60%) contrast(1.1) brightness(0.9)'}
                />
                {/* Subtle dark overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
        }}
      >
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          letterSpacing: '0.2em', color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}>Scroll</div>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--text-muted), transparent)',
        }} />
      </motion.div>
    </section>
  );
}
