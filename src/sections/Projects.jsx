import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: '01', title: 'UrjaSetu', subtitle: 'Solar Forecasting & Ice TES Platform',
    description: 'Full-stack React-Node.js-FastAPI app for IIT Kharagpur\'s 5.5 MWp solar campus. Integrates XGBoost quantile models (P10/P50/P90), LSTM hourly profiles, ice TES sizing for 21 halls, and a Corrective RAG chatbot with DeepSeek LLM and vector search.',
    tags: ['React', 'Node.js', 'FastAPI', 'XGBoost', 'LSTM', 'MongoDB', 'RAG'],
    color: '#7b68ee', accent: '#00d4ff',
    github: 'https://github.com/pavanjarpula/UrjaSetu',
    metrics: ['16.1% MAPE', '0.71 R² Score', '25 Features'], year: '2026',
  },
  {
    id: '02', title: 'Text-to-Learn', subtitle: 'AI-Powered Course Generator',
    description: 'Full-stack AI course builder that auto-generates 3–6 modules and 15+ lessons. Features polymorphic lesson rendering, OAuth 2.0 auth, multilingual audio, and PDF export.',
    tags: ['Node.js', 'React', 'MongoDB', 'OAuth 2.0', 'jsPDF'],
    color: '#ff6b35', accent: '#ffd166',
    github: 'https://github.com/pavanjarpula',
    metrics: ['15+ Lessons/Course', 'OAuth 2.0 Auth', 'Multilingual'], year: '2025',
  },
  {
    id: '03', title: 'Personalized Recommendation System', subtitle: 'Two-Stage LTR Engine',
    description: 'Production-style recommender on MovieLens 1M with ALS candidate generation, LightGBM LambdaMART ranking, 75 engineered features, and FastAPI serving. Improved nDCG@10 from 0.242 to 0.367 (+51.7%).',
    tags: ['Python', 'LightGBM', 'ALS', 'FastAPI', 'MLflow', 'Docker'],
    color: '#00d4ff', accent: '#7b68ee',
    github: 'https://github.com/pavanjarpula/Personalized-Candidate-Generation-Ranking-Engine',
    metrics: ['nDCG@10: 0.367', '75 Features', 'FastAPI Serving'], year: '2026',
  },
  {
    id: '04', title: 'C++ Concurrent HTTP Server', subtitle: 'From-Scratch Multithreaded Server',
    description: 'HTTP/1.1 server built in C++17 with raw TCP sockets, fixed-size thread pool, bounded blocking queue, and real-time metrics dashboard. Handles backpressure with HTTP 503 and lock-free atomic counters.',
    tags: ['C++17', 'TCP Sockets', 'Thread Pool', 'Docker', 'CMake'],
    color: '#c8a96e', accent: '#ff6b35',
    github: 'https://github.com/pavanjarpula/Multithreaded-HTTP-Server',
    metrics: ['41 Tests Passing', 'Lock-Free Metrics', 'Docker Deployed'], year: '2025',
  },
  {
    id: '05', title: "Rubik's Cube Solver", subtitle: 'Algorithmic Visualization Engine',
    description: "Virtual 3×3 Rubik's Cube with BFS, DFS, IDDFS and Korf's IDA* algorithms. Solves in under 4 seconds with nibble array memory optimization.",
    tags: ['C++', 'STL', 'IDA*', 'BFS', 'OOP'],
    color: '#e5c158', accent: '#ffd166',
    github: 'https://github.com/pavanjarpula',
    metrics: ['< 4s Solve Time', 'IDA* Algorithm', 'Memory Optimized'], year: '2025',
  },
  {
    id: '06', title: 'Whiteboard App', subtitle: 'Collaborative Drawing Canvas',
    description: 'React-based whiteboard with HTML5 Canvas featuring 5 drawing tools, custom color palette, brush sizes, and full undo/redo via React Context API.',
    tags: ['React', 'HTML5 Canvas', 'Tailwind CSS', 'Vercel'],
    color: '#b08d2b', accent: '#7b68ee',
    github: 'https://github.com/pavanjarpula',
    metrics: ['5 Drawing Tools', 'Undo/Redo', 'On Vercel'], year: '2024',
  },
  {
    id: '07', title: 'Civic Services DBMS', subtitle: 'Full-Stack Panchayat Management',
    description: 'Flask-PostgreSQL web app for managing civic services at the Panchayat level. 12 normalized tables, 38 REST endpoints, 4 user roles, 90 JavaScript functions across 22 HTML templates.',
    tags: ['Flask', 'PostgreSQL', 'SQLAlchemy', 'HTML5', 'JavaScript'],
    color: '#4faa41', accent: '#00d4ff',
    github: 'https://github.com/pavanjarpula/Civic-Services-and-DataBase-Management-System',
    metrics: ['38 API Endpoints', '12 DB Tables', '4 User Roles'], year: '2024',
  },
  {
    id: '08', title: 'Inventory Management Platform', subtitle: 'AI-Powered Reordering System',
    description: 'LangGraph agentic workflow with Prophet forecasting, FAISS RAG, and Groq LLM for ranked, context-aware inventory recommendations. Achieves 97% manual fill rate at 48% working capital.',
    tags: ['Python', 'LangGraph', 'Prophet', 'FAISS', 'Groq', 'Twilio'],
    color: '#4b9fd5', accent: '#ffd166',
    github: 'https://github.com/pavanjarpula',
    metrics: ['97% Fill Rate', '48% Working Capital', 'LangSmith'], year: '2025',
  },
];

/*
  LAYOUT MATH
  -----------
  card  = 46vw wide
  gap   = 2vw
  slot  = 48vw  (card + gap)

  To center cards [A, B] in a 100vw viewport:
    x = (100vw - 46vw - 2vw - 46vw) / 2  =  (100 - 94) / 2  =  3vw   (in pixels: 0.03 * vw)

  To center cards [C, D] (positions 2,3) instead:
    x = 3vw - 2 * 48vw  =  3vw - 96vw  =  -93vw  (in pixels: -0.93 * vw)

  ROW 1: [01][02][03][04][05][06][07][08]
    scroll=0 → x = +0.03vw  (01,02 centred)
    scroll=1 → x = -0.93vw  (07,08 centred)   moves LEFT ←

  ROW 2: [03][04][05][06][07][08][01][02]
    scroll=0 → x = +0.03vw  (03,04 centred)
    scroll=1 → x = -0.93vw  (01,02 centred)   moves LEFT ←

  ROW 3: [05][06][07][08][01][02][03][04]
    scroll=0 → x = +0.03vw  (05,06 centred)
    scroll=1 → x = -0.93vw  (03,04 centred)   moves LEFT ←

  ROW 4: [07][08][01][02][03][04][05][06]
    scroll=0 → x = +0.03vw  (07,08 centred)
    scroll=1 → x = -0.93vw  (05,06 centred)   moves LEFT ←

  All 8 projects visible at any scroll position (4 rows × 2 visible per row).
  Rows move in alternating directions for visual dynamism.
*/

function usePixelOffsets() {
  const calc = () => {
    const vw = window.innerWidth;
    return {
      // center cards at positions 0,1
      start: ((100 - 46 - 2 - 46) / 2 / 100) * vw,   // = 0.03 * vw
      // center cards at positions 2,3
      end:   ((3 - 96) / 100) * vw,                    // = -0.93 * vw
    };
  };

  const [offsets, setOffsets] = useState(() =>
    typeof window !== 'undefined' ? calc() : { start: 0, end: 0 }
  );

  useEffect(() => {
    const onResize = () => setOffsets(calc());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return offsets;
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.013 }}
      style={{
        width: '46vw',
        minWidth: '46vw',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '28px 32px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        transition: 'border-color 0.4s',
        boxSizing: 'border-box',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = project.color + '60'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${project.color}, ${project.accent}, transparent)` }} />
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: `radial-gradient(circle, ${project.color}12 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: project.color, letterSpacing: '0.2em', marginBottom: '6px' }}>{project.id} / {project.year}</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px,1.8vw,24px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 }}>{project.title}</h3>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '3px' }}>{project.subtitle}</div>
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none', transition: 'all 0.3s', flexShrink: 0 }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = project.color; e.currentTarget.style.color = project.color; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
        >↗</a>
      </div>

      <p style={{ fontSize: '12px', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '16px', flexGrow: 1 }}>{project.description}</p>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
        {project.metrics.map((m, i) => (
          <div key={i} style={{ padding: '3px 10px', background: project.color + '12', border: `1px solid ${project.color}30`, borderRadius: '100px', fontSize: '10px', fontWeight: 600, color: project.color }}>{m}</div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
        {project.tags.map((tag, i) => (
          <span key={i} style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '3px', fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef   = useRef(null);
  const sectionRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  const { start, end } = usePixelOffsets();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  // ROW 1: [01,02,03,04,05,06,07,08] — starts showing 01+02, scrolls left to 07+08
  const xRow1 = useTransform(scrollYProgress, [0, 1], [start, end]);
  // ROW 2: [03,04,05,06,07,08,01,02] — opposite direction
  const xRow2 = useTransform(scrollYProgress, [0, 1], [end, start]);
  // ROW 3: [05,06,07,08,01,02,03,04] — same as row 1
  const xRow3 = useTransform(scrollYProgress, [0, 1], [start, end]);
  // ROW 4: [07,08,01,02,03,04,05,06] — opposite direction
  const xRow4 = useTransform(scrollYProgress, [0, 1], [end, start]);

  // Row card orders
  const row2 = [projects[2], projects[3], projects[4], projects[5], projects[6], projects[7], projects[0], projects[1]];
  const row3 = [projects[4], projects[5], projects[6], projects[7], projects[0], projects[1], projects[2], projects[3]];
  const row4 = [projects[6], projects[7], projects[0], projects[1], projects[2], projects[3], projects[4], projects[5]];

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '80px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', right: '-300px', bottom: '0', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Header */}
      <div className="container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '48px' }}
        >
          <div className="section-label">Selected Work</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h2 className="section-title">
              Projects &<br />
              <span style={{ background: 'linear-gradient(135deg, var(--accent3), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Case Studies</span>
            </h2>
            <a href="https://github.com/pavanjarpula" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px', fontWeight: 500, border: '1px solid var(--border)', padding: '10px 20px', borderRadius: '2px', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >View All on GitHub ↗</a>
          </div>
        </motion.div>
      </div>

      {/* REEL VIEWPORT */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Edge fade masks */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(to right, var(--bg) 0%, transparent 6%, transparent 94%, var(--bg) 100%)',
        }} />

        {/* ROW 1 */}
        <motion.div style={{ display: 'flex', gap: '2vw', x: xRow1, willChange: 'transform', marginBottom: '20px' }}>
          {projects.map((p, i) => <ProjectCard key={'r1-' + i} project={p} />)}
        </motion.div>

        {/* ROW 2 — opposite direction */}
        <motion.div style={{ display: 'flex', gap: '2vw', x: xRow2, willChange: 'transform', marginBottom: '20px' }}>
          {row2.map((p, i) => <ProjectCard key={'r2-' + i} project={p} />)}
        </motion.div>

        {/* ROW 3 — same direction as row 1 */}
        <motion.div style={{ display: 'flex', gap: '2vw', x: xRow3, willChange: 'transform', marginBottom: '20px' }}>
          {row3.map((p, i) => <ProjectCard key={'r3-' + i} project={p} />)}
        </motion.div>

        {/* ROW 4 — opposite direction */}
        <motion.div style={{ display: 'flex', gap: '2vw', x: xRow4, willChange: 'transform' }}>
          {row4.map((p, i) => <ProjectCard key={'r4-' + i} project={p} />)}
        </motion.div>
      </div>

      {/* Scroll hint + CTA */}
      <div className="container">
        <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em' }}>SCROLL TO EXPLORE</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              {projects.map((_, i) => (
                <motion.div key={i} style={{
                  height: '2px', width: '24px', borderRadius: '2px',
                  background: 'var(--accent)',
                  opacity: useTransform(scrollYProgress, [i * 0.125, i * 0.125 + 0.125], [0.2, 1]),
                  scaleX: useTransform(scrollYProgress, [i * 0.125, i * 0.125 + 0.125], [0.4, 1]),
                  transformOrigin: 'left',
                }} />
              ))}
            </div>
          </div>

          <a href="https://github.com/pavanjarpula" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 24px', background: 'rgba(123,104,238,0.08)', border: '1px solid rgba(123,104,238,0.25)', borderRadius: '4px', color: 'var(--accent)', textDecoration: 'none', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(123,104,238,0.16)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(123,104,238,0.08)'; }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
