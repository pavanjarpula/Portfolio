import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    role: 'Summer Intern',
    company: 'Sponsored Research & Industrial Consultancy',
    org: 'IIT Kharagpur',
    period: 'June \'26 – Jul \'26',
    color: '#7b68ee',
    glow: 'rgba(123, 104, 238, 0.15)',
    tag: 'Full-Stack + ML',
    highlights: [
      'Built and deployed a full-stack React-Node.js-FastAPI application integrating MongoDB and ML services for solar forecasting and analytics',
      'Scraped 3 years of hourly solar-generation data and integrated Open-Meteo\'s 10 hourly weather variables for real-time ML forecasting',
      'Engineered 25 weather-temporal features using lag variables, rolling statistics, and seasonal patterns for solar-generation prediction',
      'Developed XGBoost quantile models (P10/P50/P90), achieving 16.1% MAPE, 0.71 R² score, and 31.2% improvement over persistence',
      'Developed LSTM forecasting model for 16-hour generation profiles, achieving 0.85 R² score and 219 kWh MAE on 2025 holdout data',
      'Built a Corrective RAG chatbot with adaptive retrieval and self-reflection with DeepSeek, vector search, Tavily for context-aware queries',
    ],
    tech: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'XGBoost', 'LSTM', 'RAG', 'Docker'],
  },
  {
    role: 'AI Intern',
    company: 'GradGo',
    org: 'Remote',
    period: 'June \'25 – Jul \'25',
    color: '#ff6b35',
    glow: 'rgba(255, 107, 53, 0.15)',
    tag: 'AI / LLM',
    highlights: [
      'Developed an agentic chatbot using Qwen2.5 LLM and Model Context Protocol for multi-step workplace and food-management tasks',
      'Implemented LLM-driven intent classification, tool selection, and robust multi-step MCP execution for employee and food services',
      'Built semantic food search using Nomic embeddings and Weaviate, combining vector similarity with price, protein, and calorie filters',
      'Designed a FastAPI backend with Weaviate storage and Streamlit frontend, using Ollama, Docker Compose, and bcrypt authentication',
    ],
    tech: ['Qwen2.5', 'MCP', 'FastAPI', 'Weaviate', 'Streamlit', 'Docker', 'Ollama'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: '-200px', top: '30%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,104,238,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '48px' }}
        >
          <div className="section-label">Experience</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h2 className="section-title">
              Work<br />
              <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent3))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>History</span>
            </h2>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '36px 40px',
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
              <div style={{
                position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px',
                borderRadius: '50%', background: `radial-gradient(circle, ${exp.color}10 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{
                      padding: '4px 12px', background: exp.glow,
                      border: `1px solid ${exp.color}30`, borderRadius: '100px',
                      fontSize: '10px', fontWeight: 600, color: exp.color,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                    }}>{exp.tag}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-subtle)', letterSpacing: '0.05em' }}>{exp.period}</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2vw, 26px)',
                    fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em',
                    lineHeight: 1.2, margin: 0,
                  }}>{exp.role}</h3>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px', fontStyle: 'italic' }}>
                    {exp.company} <span style={{ color: 'var(--text-subtle)' }}>·</span> {exp.org}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {exp.highlights.map((h, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    <span style={{ color: exp.color, fontSize: '8px', marginTop: '7px', flexShrink: 0 }}>●</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
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
