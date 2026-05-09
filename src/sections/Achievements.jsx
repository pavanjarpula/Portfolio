import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const achievements = [
  {
    platform: 'LeetCode',
    handle: 'pavankgpian',
    stat: '1606+',
    label: 'Top Rating',
    description: 'Reached top contest rating on LeetCode, consistently solving hard algorithmic problems.',
    color: '#ffa116',
    icon: '⚡',
    tag: 'Competitive',
    link: 'https://leetcode.com/pavankgpian',
  },
  {
    platform: 'Codeforces',
    handle: 'StarFighter007',
    stat: '#503',
    label: 'Global Rank',
    description: 'Secured global rank 503 in Codeforces Round 1029 (Div 3) among 36,218 participants.',
    color: '#7b68ee',
    icon: '🏆',
    tag: 'Global Rank',
    link: 'https://codeforces.com',
  },
  {
    platform: 'Codeforces',
    handle: 'StarFighter007',
    stat: '1490',
    label: 'Specialist Rating',
    description: 'Achieved Specialist rating on Codeforces — a popular competitive programming platform.',
    color: '#00d4ff',
    icon: '◆',
    tag: 'Rating',
    link: 'https://codeforces.com',
  },
];

const certifications = [
  {
    title: 'AZ-201: Applied Algorithms & Data Structures',
    issuer: 'Algozenith',
    period: 'Apr 2024 – Apr 2025',
    description: '16-week intensive training in DSA — Graphs, Dynamic Programming, Binary Search, and Recursion.',
    color: '#7b68ee',
    badge: 'DSA',
  },
  {
    title: 'Machine Learning',
    issuer: 'Coursera / Andrew Ng',
    period: 'Dec 2023 – Feb 2024',
    description: 'Mastered regression, neural networks, and clustering through projects and case studies.',
    color: '#00d4ff',
    badge: 'ML',
  },
];

const education = [
  {
    degree: 'Dual Degree — Mechanical Engineering',
    institution: 'IIT Kharagpur',
    period: 'Nov 2022 – May 2027',
    grade: 'CGPA: 8.23',
    location: 'Kharagpur, West Bengal',
    current: true,
  },
  {
    degree: 'TS BSE — Intermediate',
    institution: 'Narayana Junior College',
    period: 'Aug 2020 – May 2022',
    grade: '98.6%',
    location: 'Hyderabad, Telangana',
    current: false,
  },
  {
    degree: 'SSC — 10th Grade',
    institution: 'TS Model School',
    period: 'Jul 2019 – May 2020',
    grade: 'CGPA: 10 / 10',
    location: 'Chilukodu, Telangana',
    current: false,
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG glow */}
      <div style={{
        position: 'absolute', left: '50%', top: '30%',
        width: '800px', height: '400px',
        transform: 'translateX(-50%)',
        background: 'radial-gradient(ellipse, rgba(123,104,238,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '80px' }}
        >
          <div className="section-label">Recognition</div>
          <h2 className="section-title">
            Achievements &<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--gold), #f5e6c8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Education</span>
          </h2>
        </motion.div>

        {/* Competitive programming cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '80px' }}>
          {achievements.map((a, i) => (
            <motion.a
              key={i}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -4 }}
              style={{
                textDecoration: 'none',
                padding: '36px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                position: 'relative', overflow: 'hidden',
                display: 'block',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = a.color + '50'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${a.color}, transparent)`,
              }} />
              <div style={{
                position: 'absolute', bottom: '-30px', right: '-20px',
                fontSize: '100px', opacity: 0.04, userSelect: 'none',
              }}>{a.icon}</div>

              <div style={{
                display: 'inline-block', padding: '4px 10px',
                background: a.color + '15',
                border: `1px solid ${a.color}30`,
                borderRadius: '3px',
                fontSize: '10px', fontWeight: 700,
                color: a.color, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: '20px',
              }}>
                {a.tag}
              </div>

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 4vw, 56px)',
                fontWeight: 800, lineHeight: 1,
                color: a.color, marginBottom: '4px',
                letterSpacing: '-0.03em',
              }}>
                {a.stat}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '16px' }}>
                {a.label} · {a.platform}
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {a.description}
              </p>
              <div style={{
                marginTop: '16px',
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: a.color + '80', letterSpacing: '0.05em',
              }}>
                @{a.handle}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Two column: Certifications + Education */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '24px',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--text-subtle)' }} />
              Certifications
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {certifications.map((cert, i) => (
                <div key={i} style={{
                  padding: '28px', background: 'var(--surface)',
                  border: '1px solid var(--border)', borderRadius: '6px',
                  borderLeft: `3px solid ${cert.color}`,
                  transition: 'border-color 0.3s',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{
                      width: '36px', height: '36px',
                      background: cert.color + '15',
                      border: `1px solid ${cert.color}30`,
                      borderRadius: '6px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: 700,
                      color: cert.color, fontFamily: 'var(--font-mono)',
                    }}>
                      {cert.badge}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
                      {cert.period}
                    </div>
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px', lineHeight: 1.3 }}>
                    {cert.title}
                  </h4>
                  <div style={{ fontSize: '12px', color: cert.color, marginBottom: '10px', fontWeight: 500 }}>
                    {cert.issuer}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '24px',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--text-subtle)' }} />
              Education
            </div>

            <div style={{ position: 'relative' }}>
              {/* Timeline line */}
              <div style={{
                position: 'absolute', left: '20px', top: '28px', bottom: '28px',
                width: '1px', background: 'linear-gradient(to bottom, var(--accent), var(--border))',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {education.map((edu, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '24px', marginBottom: i < education.length - 1 ? '28px' : 0,
                  }}>
                    {/* Dot */}
                    <div style={{
                      width: '40px', flexShrink: 0,
                      display: 'flex', alignItems: 'flex-start',
                      justifyContent: 'center', paddingTop: '24px',
                    }}>
                      <div style={{
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: edu.current ? 'var(--accent)' : 'var(--surface2)',
                        border: edu.current ? '2px solid var(--accent)' : '2px solid var(--text-subtle)',
                        boxShadow: edu.current ? '0 0 12px var(--glow)' : 'none',
                        flexShrink: 0,
                      }} />
                    </div>

                    {/* Content */}
                    <div style={{
                      flex: 1, padding: '20px 24px',
                      background: edu.current ? 'rgba(123,104,238,0.06)' : 'var(--surface)',
                      border: `1px solid ${edu.current ? 'rgba(123,104,238,0.25)' : 'var(--border)'}`,
                      borderRadius: '6px',
                    }}>
                      {edu.current && (
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px',
                          padding: '3px 10px', background: 'rgba(0,255,136,0.1)',
                          border: '1px solid rgba(0,255,136,0.2)',
                          borderRadius: '100px', marginBottom: '10px',
                          fontSize: '10px', color: '#00ff88', letterSpacing: '0.06em',
                        }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00ff88' }} />
                          Currently Enrolled
                        </div>
                      )}
                      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, marginBottom: '4px' }}>
                        {edu.degree}
                      </h4>
                      <div style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 500, marginBottom: '4px' }}>
                        {edu.institution}
                      </div>
                      <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        <span>{edu.period}</span>
                        <span>·</span>
                        <span style={{ color: 'var(--gold)' }}>{edu.grade}</span>
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
