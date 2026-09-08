import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Icons = {
  C: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="16" cy="16" r="14" fill="#659ad2" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="14" fontWeight="700" fill="#659ad2" fontFamily="monospace">C</text>
    </svg>
  ),
  Cpp: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="16" cy="16" r="14" fill="#00599C" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="10" fontWeight="700" fill="#00599C" fontFamily="monospace">C++</text>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 32 32" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#f7df1e" opacity="0.15"/>
      <text x="16" y="22" textAnchor="middle" fontSize="13" fontWeight="700" fill="#f7df1e" fontFamily="monospace">JS</text>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#3776ab" opacity="0.15"/>
      <text x="16" y="22" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4b9fd5" fontFamily="monospace">Py</text>
    </svg>
  ),
  SQL: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#4479a1" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4479a1" fontFamily="monospace">SQL</text>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 32 32" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#3178c6" opacity="0.15"/>
      <text x="16" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3178c6" fontFamily="monospace">TS</text>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="16" cy="16" r="3" fill="#61dafb"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" fill="none" opacity="0.5" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" fill="none" opacity="0.5" transform="rotate(120 16 16)"/>
    </svg>
  ),
  Vite: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <path d="M27 7L17 26l-3-9L5 15z" fill="#646CFF" opacity="0.15"/>
      <path d="M5 15l7-3 3 9L27 7" stroke="#646CFF" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <text x="16" y="28" textAnchor="middle" fontSize="7" fontWeight="700" fill="#646CFF" fontFamily="monospace" opacity="0.6">Vite</text>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <path d="M8 13c1-4 3.5-6 7-5 3.5 1 4.5 4 6 5 1.5 1 3.5.5 5-1-1 4-3.5 6-7 5-3.5-1-4.5-4-6-5-1.5-1-3.5-.5-5 1z" fill="#38bdf8" opacity="0.8"/>
      <path d="M3 19c1-4 3.5-6 7-5 3.5 1 4.5 4 6 5 1.5 1 3.5.5 5-1-1 4-3.5 6-7 5-3.5-1-4.5-4-6-5-1.5-1-3.5-.5-5 1z" fill="#38bdf8" opacity="0.4"/>
    </svg>
  ),
  FramerMotion: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#e5e5e5" opacity="0.1"/>
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#e5e5e5" fontFamily="monospace" opacity="0.7">FM</text>
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <path d="M16 4L28 11v10l-12 7L4 21V11z" stroke="#68a063" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <text x="16" y="20" textAnchor="middle" fontSize="7" fontWeight="700" fill="#68a063" fontFamily="monospace">Node</text>
    </svg>
  ),
  Express: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#e5e5e5" opacity="0.08"/>
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#e5e5e5" fontFamily="monospace" opacity="0.7">Exp</text>
    </svg>
  ),
  FastAPI: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#009688" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#009688" fontFamily="monospace">FA</text>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <path d="M16 4c0 0-7 8-7 14a7 7 0 0014 0C23 12 16 4 16 4z" stroke="#4faa41" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <line x1="16" y1="18" x2="16" y2="28" stroke="#4faa41" strokeWidth="1.5" opacity="0.6"/>
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#336791" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#336791" fontFamily="monospace">PG</text>
    </svg>
  ),
  FAISS: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#068cd1" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#068cd1" fontFamily="monospace">F</text>
    </svg>
  ),
  Weaviate: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#00c4b3" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#00c4b3" fontFamily="monospace">W</text>
    </svg>
  ),
  NumPy: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect x="4" y="4" width="11" height="11" rx="1" fill="#4dabcf" opacity="0.6"/>
      <rect x="17" y="4" width="11" height="11" rx="1" fill="#4dabcf" opacity="0.4"/>
      <rect x="4" y="17" width="11" height="11" rx="1" fill="#4dabcf" opacity="0.4"/>
      <rect x="17" y="17" width="11" height="11" rx="1" fill="#4dabcf" opacity="0.6"/>
    </svg>
  ),
  Pandas: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect x="6" y="4" width="5" height="24" rx="2.5" fill="#150458" stroke="#e70488" strokeWidth="1" opacity="0.8"/>
      <rect x="21" y="4" width="5" height="24" rx="2.5" fill="#150458" stroke="#e70488" strokeWidth="1" opacity="0.8"/>
      <rect x="11" y="11" width="10" height="3" rx="1" fill="#e70488" opacity="0.6"/>
      <rect x="11" y="18" width="10" height="3" rx="1" fill="#e70488" opacity="0.6"/>
    </svg>
  ),
  Matplotlib: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <polyline points="4,24 10,14 16,18 22,8 28,12" stroke="#11557c" strokeWidth="2" fill="none" opacity="0.8"/>
      <polyline points="4,24 10,14 16,18 22,8 28,12" stroke="#40a9ff" strokeWidth="1.5" fill="none" opacity="0.6"/>
    </svg>
  ),
  Seaborn: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="10" cy="22" r="3" fill="#4878cf" opacity="0.7"/>
      <circle cx="16" cy="14" r="3" fill="#6acc65" opacity="0.7"/>
      <circle cx="22" cy="18" r="3" fill="#d65f5f" opacity="0.7"/>
      <circle cx="13" cy="20" r="2" fill="#b47cc7" opacity="0.7"/>
      <circle cx="19" cy="11" r="2" fill="#c4ad66" opacity="0.7"/>
    </svg>
  ),
  XGBoost: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#fca120" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fca120" fontFamily="monospace">XGB</text>
    </svg>
  ),
  LangChain: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="8" cy="16" r="4" stroke="#1c7c54" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <circle cx="24" cy="16" r="4" stroke="#1c7c54" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d="M12 16h8" stroke="#1c7c54" strokeWidth="2" opacity="0.8"/>
    </svg>
  ),
  LangGraph: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="8" cy="10" r="3" stroke="#1c7c54" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <circle cx="24" cy="10" r="3" stroke="#1c7c54" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <circle cx="16" cy="24" r="3" stroke="#1c7c54" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d="M11 10h10M8 13l5 8M24 13l-5 8" stroke="#1c7c54" strokeWidth="1.5" opacity="0.6"/>
    </svg>
  ),
  MCP: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#e5c158" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#e5c158" fontFamily="monospace">MCP</text>
    </svg>
  ),
  RAG: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect x="4" y="8" width="10" height="6" rx="1.5" fill="#7b68ee" opacity="0.5"/>
      <rect x="4" y="18" width="10" height="6" rx="1.5" fill="#7b68ee" opacity="0.3"/>
      <circle cx="24" cy="16" r="5" stroke="#7b68ee" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d="M14 11l6 2M14 21l6-2" stroke="#7b68ee" strokeWidth="1" opacity="0.6"/>
    </svg>
  ),
  VectorSearch: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="16" cy="16" r="10" stroke="#7b68ee" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <circle cx="12" cy="12" r="2" fill="#7b68ee" opacity="0.8"/>
      <circle cx="20" cy="14" r="2" fill="#7b68ee" opacity="0.6"/>
      <circle cx="14" cy="20" r="2" fill="#7b68ee" opacity="0.7"/>
      <path d="M12 12l8 2M12 12l2 8" stroke="#7b68ee" strokeWidth="1" opacity="0.4"/>
    </svg>
  ),
  PromptEng: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="#ff6b35" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ff6b35" fontFamily="monospace" opacity="0.8">{'>'}_</text>
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <path d="M28 14.7L17.3 4a1.3 1.3 0 00-1.9 0L13 6.4l2.4 2.4a1.6 1.6 0 012 2l2.3 2.3a1.6 1.6 0 11-1 1l-2.1-2.1v5.5a1.6 1.6 0 11-1.3 0V12a1.6 1.6 0 01-.9-2.1L12.2 7.7 4 15.9a1.3 1.3 0 000 1.9L14.7 28a1.3 1.3 0 001.9 0L28 16.6a1.3 1.3 0 000-1.9z" fill="#f05133" opacity="0.7"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect x="4" y="12" width="5" height="4" rx="1" fill="#2496ed" opacity="0.7"/>
      <rect x="11" y="12" width="5" height="4" rx="1" fill="#2496ed" opacity="0.7"/>
      <rect x="18" y="12" width="5" height="4" rx="1" fill="#2496ed" opacity="0.7"/>
      <rect x="11" y="7" width="5" height="4" rx="1" fill="#2496ed" opacity="0.5"/>
      <path d="M4 20c2 3 8 4 14 2s10-6 10-6" stroke="#2496ed" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  ),
  Sklearn: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#f39c12" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#f39c12" fontFamily="monospace">sk</text>
    </svg>
  ),
  Bagging: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#9b59b6" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#9b59b6" fontFamily="monospace">BG</text>
    </svg>
  ),
  Boosting: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#e74c3c" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#e74c3c" fontFamily="monospace">BT</text>
    </svg>
  ),
  Streamlit: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#ff4f4f" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#ff4f4f" fontFamily="monospace">ST</text>
    </svg>
  ),
  Postman: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#ff6c37" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#ff6c37" fontFamily="monospace">PM</text>
    </svg>
  ),
  MLflow: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#0194e2" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0194e2" fontFamily="monospace">MLF</text>
    </svg>
  ),
  CLion: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#fc801d" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fc801d" fontFamily="monospace">CL</text>
    </svg>
  ),
  Jupyter: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#f37626" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#f37626" fontFamily="monospace">JN</text>
    </svg>
  ),
  Angular: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#dd0031" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill="#dd0031" fontFamily="monospace">Ag</text>
    </svg>
  ),
  Vanilla: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#f7df1e" opacity="0.12"/>
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#f7df1e" fontFamily="monospace">V</text>
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <rect width="32" height="32" rx="3" fill="#e34f26" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#e34f26" fontFamily="monospace">H5</text>
    </svg>
  ),
};

const skillGroups = [
  {
    category: 'Languages',
    catIcon: '{ }',
    skills: [
      { name: 'Python', Icon: Icons.Python },
      { name: 'C', Icon: Icons.C },
      { name: 'C++', Icon: Icons.Cpp },
      { name: 'JavaScript', Icon: Icons.JavaScript },
      { name: 'TypeScript', Icon: Icons.TypeScript },
      { name: 'SQL', Icon: Icons.SQL },
    ],
  },
  {
    category: 'Frontend',
    catIcon: '◈',
    skills: [
      { name: 'React.js', Icon: Icons.React },
      { name: 'Angular', Icon: Icons.Angular },
      { name: 'Vite', Icon: Icons.Vite },
      { name: 'Tailwind CSS', Icon: Icons.Tailwind },
      { name: 'HTML5', Icon: Icons.HTML5 },
      { name: 'Framer Motion', Icon: Icons.FramerMotion },
      { name: 'Vanilla CSS/JS', Icon: Icons.Vanilla },
    ],
  },
  {
    category: 'Backend & APIs',
    catIcon: '⚙',
    skills: [
      { name: 'Node.js', Icon: Icons.NodeJS },
      { name: 'Express.js', Icon: Icons.Express },
      { name: 'FastAPI', Icon: Icons.FastAPI },
      { name: 'REST APIs', Icon: Icons.NodeJS },
    ],
  },
  {
    category: 'Databases & Storage',
    catIcon: '⬡',
    skills: [
      { name: 'MongoDB', Icon: Icons.MongoDB },
      { name: 'PostgreSQL', Icon: Icons.PostgreSQL },
      { name: 'FAISS', Icon: Icons.FAISS },
      { name: 'Weaviate', Icon: Icons.Weaviate },
    ],
  },
  {
    category: 'Data Science & ML',
    catIcon: '∑',
    skills: [
      { name: 'Pandas', Icon: Icons.Pandas },
      { name: 'NumPy', Icon: Icons.NumPy },
      { name: 'Matplotlib', Icon: Icons.Matplotlib },
      { name: 'Scikit-Learn', Icon: Icons.Sklearn },
      { name: 'XGBoost', Icon: Icons.XGBoost },
      { name: 'Bagging & Boosting', Icon: Icons.Bagging },
    ],
  },
  {
    category: 'AI & Generative AI',
    catIcon: '◇',
    skills: [
      { name: 'RAG', Icon: Icons.RAG },
      { name: 'LangChain', Icon: Icons.LangChain },
      { name: 'LangGraph', Icon: Icons.LangGraph },
      { name: 'MCP', Icon: Icons.MCP },
      { name: 'Vector Search', Icon: Icons.VectorSearch },
      { name: 'Prompt Engineering', Icon: Icons.PromptEng },
    ],
  },
  {
    category: 'DevOps & Tools',
    catIcon: '⊕',
    skills: [
      { name: 'Git & GitHub', Icon: Icons.Git },
      { name: 'Docker', Icon: Icons.Docker },
      { name: 'Streamlit', Icon: Icons.Streamlit },
      { name: 'Postman', Icon: Icons.Postman },
      { name: 'MLflow', Icon: Icons.MLflow },
      { name: 'CLion', Icon: Icons.CLion },
      { name: 'Jupyter Notebook', Icon: Icons.Jupyter },
    ],
  },
];

function SkillCard({ group, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        padding: '28px',
        position: 'relative',
        transition: 'border-color 0.3s',
      }}
      whileHover={{ borderColor: 'var(--accent)' }}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '20px',
        color: 'var(--accent)',
        marginBottom: '10px',
        fontStyle: 'italic',
        opacity: 0.8,
      }}>
        {group.catIcon}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '15px', fontWeight: 500,
        color: 'var(--text)', marginBottom: '20px',
        letterSpacing: '-0.01em',
        fontStyle: 'italic',
      }}>
        {group.category}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {group.skills.map(({ name, Icon }, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '10px'
          }}>
            <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
              <Icon />
            </span>
            <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 400 }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}
        >
          <div>
            <div className="section-label">Expertise</div>
            <h2 className="section-title">
              Technical
              <br />
              <span style={{ color: 'var(--text-muted)' }}>Proficiency</span>
            </h2>
          </div>
          <p style={{
            maxWidth: '360px', color: 'var(--text-muted)',
            fontSize: '15px', lineHeight: 1.8,
            fontWeight: 300,
          }}>
            Continuously learning and mastering the tools that shape robust, modern software architecture.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}>
          {skillGroups.map((group, i) => (
            <SkillCard key={i} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
