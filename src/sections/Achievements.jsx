import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const achievements = [
  {
    platform: 'Codeforces',
    handle: 'pavanj123',
    stat: '1481',
    label: 'Specialist Rating',
    description: 'Achieved Specialist rating on Codeforces — a popular competitive programming platform.',
    color: '#e5c158',
    glow: 'rgba(229, 193, 88, 0.15)',
    icon: '◆',
    tag: 'Rating',
    link: 'https://codeforces.com/contests/with/pavanj123?type=all',
  },
  {
    platform: 'Codeforces',
    handle: 'pavanj123',
    stat: '#1005',
    label: 'Global Rank',
    description: 'Secured global rank 1005 in Educational Codeforces Round 191 (Rated for Div. 2), solving 4 problems — top 4% of 27,197 participants.',
    color: '#e5c158',
    glow: 'rgba(229, 193, 88, 0.15)',
    icon: '🏆',
    tag: 'Top 4%',
    link: 'https://codeforces.com/contests/with/pavanj123?type=all',
  },
  {
    platform: 'Codeforces',
    handle: 'pavanj123',
    stat: '#1676',
    label: 'Global Rank',
    description: 'Secured global rank 1676 in Codeforces Round 1033 (Div. 2), placing among the top 6% of 28,431 participants.',
    color: '#b08d2b',
    glow: 'rgba(176, 141, 43, 0.15)',
    icon: '◆',
    tag: 'Top 6%',
    link: 'https://codeforces.com/contests/with/pavanj123?type=all',
  },
  {
    platform: 'LeetCode',
    handle: 'pavankgpian',
    stat: '1606+',
    label: 'Top Rating',
    description: 'Reached peak contest rating of 1606 on LeetCode, a globally recognized competitive programming platform.',
    color: '#d4af37',
    glow: 'rgba(212, 175, 55, 0.15)',
    icon: '⚡',
    tag: 'Competitive',
    link: 'https://leetcode.com/pavankgpian',
  },
];

const certifications = [
  {
    title: 'AZ-201: Applied Algorithms & Data Structures',
    issuer: 'Algozenith',
    period: 'Apr 2024 – Jan 2025',
    description: 'Graphs, Trees, Binary Search, STL, Bit Manipulation & Dynamic Programming.',
    color: '#d4af37',
    glow: 'rgba(212, 175, 55, 0.15)',
    badge: 'DSA',
    link: 'https://drive.google.com/file/d/1ioTtL4Tg0XxfLuMDh3HO49AYsxDEKZKF/view?usp=drive_link',
  },
  {
    title: 'Machine Learning by Andrew Ng',
    issuer: 'Coursera',
    period: 'Dec 2023 – Feb 2024',
    description: 'Supervised & unsupervised learning, regression, neural networks & clustering.',
    color: '#e5c158',
    glow: 'rgba(229, 193, 88, 0.15)',
    badge: 'ML',
    link: 'https://drive.google.com/file/d/1pjP2JvPkB2HZ8e1R_52F49wb_3pSiTVH/view?usp=drive_link',
  },
  {
    title: 'Python Developer Certification',
    issuer: 'HackerRank',
    period: '2024',
    description: 'Python fundamentals, data structures, OOP, error handling & file I/O.',
    color: '#f39c12',
    glow: 'rgba(243, 156, 18, 0.15)',
    badge: 'Py',
    link: 'https://www.hackerrank.com/certificates/7b0c8f1e1a2a',
  },
];

const education = [
  {
    degree: 'B.Tech (Hons.) + M.Tech Dual Degree',
    institution: 'IIT Kharagpur',
    detail: 'Mechanical Engineering & Manufacturing Science',
    period: 'Nov 2022 – May 2027',
    grade: 'CGPA: 7.22',
    current: true,
  },
  {
    degree: 'TS BSE — Intermediate',
    institution: 'Narayana Junior College',
    period: 'Aug 2020 – May 2022',
    grade: '98.6%',
    current: false,
  },
  {
    degree: 'SSC — 10th Grade',
    institution: 'TS Model School',
    period: 'Jul 2019 – May 2020',
    grade: 'CGPA: 10 / 10',
    current: false,
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', left: '50%', top: '30%',
        width: '800px', height: '400px',
        transform: 'translateX(-50%)',
        background: 'radial-gradient(ellipse, var(--glow) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Recognition</div>
          <h2 className="section-title">
            Achievements,
            <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--gold), #f5e6c8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              fontStyle: 'italic', paddingRight: '0.1em'
            }}>Certs & Education</span>
          </h2>
        </motion.div>

        {/* Competitive programming cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '64px' }}>
          {achievements.map((a, i) => (
            <motion.a
              key={i}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                textDecoration: 'none',
                padding: '40px 32px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = a.color + '50';
                e.currentTarget.style.boxShadow = `0 10px 40px ${a.glow}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${a.color}, transparent)`,
                opacity: 0.7
              }} />
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                fontSize: '120px', opacity: 0.03, userSelect: 'none', pointerEvents: 'none',
                transform: 'rotate(15deg)'
              }}>{a.icon}</div>

              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '4px 12px', background: a.glow,
                border: `1px solid ${a.color}30`, borderRadius: '100px',
                fontSize: '10px', fontWeight: 600, color: a.color,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px',
                alignSelf: 'flex-start'
              }}>{a.tag}</div>

              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 4vw, 56px)',
                fontWeight: 500, lineHeight: 1, color: a.color, marginBottom: '8px',
                letterSpacing: '-0.02em', fontStyle: 'italic'
              }}>{a.stat}</div>
              <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500, letterSpacing: '0.05em', marginBottom: '16px' }}>
                {a.label} <span style={{ color: 'var(--text-subtle)' }}>· {a.platform}</span>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', fontWeight: 300, flexGrow: 1 }}>
                {a.description}
              </p>
              <div style={{
                marginTop: '20px', fontFamily: 'var(--font-mono)',
                fontSize: '12px', color: 'var(--text-subtle)', letterSpacing: '0.05em',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}>
                <span style={{ width: '16px', height: '1px', background: 'var(--text-subtle)' }} />
                @{a.handle}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Certifications + Education */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* LEFT: Certifications */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '24px', fontStyle: 'italic',
              color: 'var(--text)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px'
            }}>
              Certifications
              <span style={{ flexGrow: 1, height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {certifications.map((cert, i) => (
                <a
                  key={i} href={cert.link} target="_blank" rel="noopener noreferrer" data-hover
                  style={{
                    textDecoration: 'none', padding: '18px', background: 'var(--surface)',
                    border: '1px solid var(--border)', borderRadius: '6px',
                    transition: 'all 0.3s', display: 'block', position: 'relative', overflow: 'hidden'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = cert.color + '50'; e.currentTarget.style.transform = 'translateX(8px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: cert.color, opacity: 0.8 }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{
                      padding: '2px 8px', background: cert.glow, borderRadius: '4px',
                      fontSize: '10px', fontWeight: 600, color: cert.color, fontFamily: 'var(--font-mono)',
                    }}>{cert.badge}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>{cert.period}</div>
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px', lineHeight: 1.3 }}>{cert.title}</h4>
                  <div style={{ fontSize: '12px', color: cert.color, marginBottom: '4px', fontWeight: 400, fontStyle: 'italic' }}>{cert.issuer}</div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.4, margin: 0, fontWeight: 300 }}>{cert.description}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Education timeline */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '24px', fontStyle: 'italic',
              color: 'var(--text)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px'
            }}>
              Education
              <span style={{ flexGrow: 1, height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)' }} />
            </div>

            <div style={{ position: 'relative', background: 'var(--surface)', padding: '32px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              {/* Vertical timeline line */}
              <div style={{
                position: 'absolute', left: '47px', top: '40px', bottom: '40px',
                width: '1px', background: 'linear-gradient(to bottom, var(--accent) 0%, var(--border) 100%)',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {education.map((edu, i) => (
                  <div key={i} style={{ display: 'flex', gap: '24px', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: edu.current ? 'var(--bg)' : 'var(--surface)',
                      border: edu.current ? '2px solid var(--accent)' : '2px solid var(--border)',
                      boxShadow: edu.current ? '0 0 16px var(--glow)' : 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {edu.current && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)' }} />}
                    </div>

                    <div style={{ flex: 1, paddingTop: '4px' }}>
                      {edu.current && (
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          padding: '4px 10px', background: 'var(--glow)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          borderRadius: '100px', marginBottom: '12px',
                          fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase'
                        }}>
                          Currently Enrolled
                        </div>
                      )}
                      <h4 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, marginBottom: '6px' }}>{edu.degree}</h4>
                      <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '4px' }}>{edu.institution}</div>
                      {edu.detail && <div style={{ fontSize: '13px', color: 'var(--text-subtle)', marginBottom: '10px' }}>{edu.detail}</div>}
                      <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', alignItems: 'center' }}>
                        <span>{edu.period}</span>
                        <span>·</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
