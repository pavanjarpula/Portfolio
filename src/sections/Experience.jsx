import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    role: 'Summer Intern',
    company: 'SRIC',
    org: 'IIT Kharagpur',
    period: 'June \'26 – Jul \'26',
    color: '#7b68ee',
    glow: 'rgba(123, 104, 238, 0.15)',
    tag: 'Full-Stack + ML',
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect width="40" height="40" rx="8" fill="#7b68ee" opacity="0.12"/>
        <path d="M12 28V14l8-4 8 4v14l-8 4-8-4z" stroke="#7b68ee" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <path d="M12 14l8 4 8-4M20 18v14" stroke="#7b68ee" strokeWidth="1.5" opacity="0.5"/>
        <text x="20" y="23" textAnchor="middle" fontSize="6" fontWeight="700" fill="#7b68ee" fontFamily="monospace" opacity="0.9">IIT</text>
      </svg>
    ),
    highlights: [
      'Built full-stack React-Node.js-FastAPI app for solar forecasting on IIT Kharagpur\'s 5.5 MWp campus — XGBoost (16.1% MAPE, 0.71 R²) + LSTM (0.85 R²) models',
      'Engineered 25 weather-temporal features, scraped 3 years of hourly data, integrated Open-Meteo\'s 10 weather variables for real-time ML inference',
      'Built a Corrective RAG chatbot with DeepSeek LLM, Atlas vector search, and Tavily web fallback for context-aware energy queries',
    ],
    tech: ['React', 'FastAPI', 'XGBoost', 'LSTM', 'RAG', 'MongoDB'],
  },
  {
    role: 'AI Intern',
    company: 'GradGo',
    org: 'Remote',
    period: 'June \'25 – Jul \'25',
    color: '#ff6b35',
    glow: 'rgba(255, 107, 53, 0.15)',
    tag: 'AI / LLM',
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect width="40" height="40" rx="8" fill="#ff6b35" opacity="0.12"/>
        <circle cx="20" cy="16" r="5" stroke="#ff6b35" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <path d="M12 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#ff6b35" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <circle cx="20" cy="16" r="2" fill="#ff6b35" opacity="0.4"/>
        <path d="M17 15l3 2 3-2" stroke="#ff6b35" strokeWidth="1" opacity="0.6"/>
      </svg>
    ),
    highlights: [
      'Developed an agentic chatbot using Qwen2.5 LLM and Model Context Protocol for multi-step workplace and food-management tasks',
      'Built semantic food search with Nomic embeddings + Weaviate vector DB, combining similarity with price, protein, and calorie filters',
      'Designed FastAPI backend + Streamlit frontend with Ollama, Docker Compose, and bcrypt auth',
    ],
    tech: ['Qwen2.5', 'MCP', 'FastAPI', 'Weaviate', 'Streamlit', 'Docker'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" style={{ padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '40px' }}
        >
          <div className="section-label">Experience</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h2 className="section-title">
              Work<br />
              <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent3))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>History</span>
            </h2>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '28px 32px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.4s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = exp.color + '60'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${exp.color}, ${exp.color}80, transparent)`,
              }} />

              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ flexShrink: 0 }}>{exp.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 1.8vw, 22px)',
                      fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em',
                      lineHeight: 1.2, margin: 0,
                    }}>{exp.role}</h3>
                    <span style={{
                      padding: '3px 10px', background: exp.glow,
                      border: `1px solid ${exp.color}30`, borderRadius: '100px',
                      fontSize: '9px', fontWeight: 600, color: exp.color,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>{exp.tag}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {exp.company} <span style={{ color: 'var(--text-subtle)' }}>·</span> {exp.org}
                    <span style={{ color: 'var(--text-subtle)', marginLeft: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', paddingLeft: '56px' }}>
                {exp.highlights.map((h, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    <span style={{ color: exp.color, fontSize: '6px', marginTop: '6px', flexShrink: 0 }}>●</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', paddingLeft: '56px' }}>
                {exp.tech.map((t, j) => (
                  <span key={j} style={{
                    padding: '3px 8px', background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)', borderRadius: '3px',
                    fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)',
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
