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
              & AI / Data Engineer
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
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--text)'; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Selected Work
              </button>

              <button
                data-hover
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '16px 40px',
                  background: 'transparent',
                  border: '1px solid var(--border-hover)',
                  borderRadius: '2px',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px', fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  cursor: 'none',
                  transition: 'all 0.3s',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'transparent'; }}
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Photo with animation */}
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
              {/* Animated corner decorations */}
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '-8px', left: '-8px',
                  width: '40px', height: '40px',
                  borderTop: '2px solid var(--accent)',
                  borderLeft: '2px solid var(--accent)',
                  zIndex: 3,
                }}
              />
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                style={{
                  position: 'absolute', bottom: '-8px', right: '-8px',
                  width: '40px', height: '40px',
                  borderBottom: '2px solid var(--accent)',
                  borderRight: '2px solid var(--accent)',
                  zIndex: 3,
                }}
              />

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.7, 0.2],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.5 + i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                  style={{
                    position: 'absolute',
                    width: '4px', height: '4px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    top: `${20 + i * 15}%`,
                    right: `${-10 - i * 3}%`,
                    zIndex: 4,
                    pointerEvents: 'none',
                  }}
                />
              ))}

              {/* Subtle scan line animation */}
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                  zIndex: 4, opacity: 0.25,
                  pointerEvents: 'none',
                }}
              />

              {/* Image Frame */}
              <motion.div
                animate={{ x: [-16, -12, -16], y: [16, 12, 16] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', inset: 0,
                  border: '1px solid var(--border)',
                  zIndex: 0,
                }}
              />
              
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
                    objectPosition: 'center top',
                    filter: 'grayscale(40%) contrast(1.15) brightness(0.92) saturate(0.8)',
                    transition: 'filter 0.6s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%) contrast(1.05) brightness(1) saturate(1.2)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(40%) contrast(1.15) brightness(0.92) saturate(0.8)'}
                />
                {/* Dark gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(3,3,3,0.7) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }} />
                {/* Side gold shimmer */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }} />
                {/* Name tag at bottom */}
                <div style={{
                  position: 'absolute', bottom: '20px', left: '20px',
                  zIndex: 2,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: 'var(--accent)', letterSpacing: '0.2em',
                    textTransform: 'uppercase', marginBottom: '4px',
                    opacity: 0.8,
                  }}>
                    Jarpula Pavan
                  </div>
                  <div style={{
                    width: '32px', height: '1px',
                    background: 'var(--accent)', opacity: 0.5,
                  }} />
                </div>
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
        <motion.div
          animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            transformOrigin: 'top',
          }}
        />
      </motion.div>
    </section>
  );
}
