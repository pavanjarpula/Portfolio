import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
          padding: scrolled ? '16px 48px' : '28px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(5, 5, 8, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: '20px', letterSpacing: '-0.03em', cursor: 'pointer',
          }}
        >
          <span style={{ color: 'var(--text)' }}>PAVAN</span>
          <span style={{ color: 'var(--accent)', marginLeft: '2px' }}>.</span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              data-hover
              style={{
                background: 'none', border: 'none', cursor: 'none',
                fontFamily: 'var(--font-body)', fontSize: '13px',
                fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase',
                color: active === link ? 'var(--text)' : 'var(--text-muted)',
                transition: 'color 0.3s',
                position: 'relative', padding: '4px 0',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:mepavaniitkgp@gmail.com"
            data-hover
            style={{
              padding: '10px 24px',
              background: 'transparent',
              border: '1px solid var(--accent)',
              borderRadius: '2px',
              color: 'var(--accent)',
              fontFamily: 'var(--font-body)',
              fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'white'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
          >
            Hire Me
          </a>
        </div>
      </motion.nav>

      {/* Mobile menu button hidden for brevity - desktop focused */}
    </>
  );
}
