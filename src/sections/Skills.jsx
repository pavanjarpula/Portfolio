import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// SVG icon components — dark theme friendly
const Icons = {
  C: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="16" cy="16" r="14" fill="#659ad2" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="14" fontWeight="700" fill="#659ad2" fontFamily="monospace">C</text>
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
  HTML: () => (
    <svg viewBox="0 0 32 32" width="18" height="18">
      <rect width="32" height="32" rx="3" fill="#e34c26" opacity="0.15"/>
      <text x="16" y="21" textAnchor="middle" fontSize="9" fontWeight="700" fill="#e34c26" fontFamily="monospace">HTML</text>
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
  Tailwind: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <path d="M8 13c1-4 3.5-6 7-5 3.5 1 4.5 4 6 5 1.5 1 3.5.5 5-1-1 4-3.5 6-7 5-3.5-1-4.5-4-6-5-1.5-1-3.5-.5-5 1z" fill="#38bdf8" opacity="0.8"/>
      <path d="M3 19c1-4 3.5-6 7-5 3.5 1 4.5 4 6 5 1.5 1 3.5.5 5-1-1 4-3.5 6-7 5-3.5-1-4.5-4-6-5-1.5-1-3.5-.5-5 1z" fill="#38bdf8" opacity="0.4"/>
    </svg>
  ),
  Redux: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <path d="M20 7c2.5.5 4 2.5 3.5 5" stroke="#764abc" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <path d="M23 16c.5 3-1.5 5.5-4.5 5.5" stroke="#764abc" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <path d="M9 21.5C6.5 21 5 19 5.5 16" stroke="#764abc" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <circle cx="16" cy="16" r="3" fill="#764abc" opacity="0.6"/>
    </svg>
  ),
  NextJS: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="16" cy="16" r="13" stroke="#e5e5e5" strokeWidth="1.5" opacity="0.3"/>
      <text x="9" y="21" fontSize="11" fontWeight="800" fill="#e5e5e5" fontFamily="monospace" opacity="0.8">N›</text>
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <path d="M16 4L28 11v10l-12 7L4 21V11z" stroke="#68a063" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <text x="16" y="20" textAnchor="middle" fontSize="7" fontWeight="700" fill="#68a063" fontFamily="monospace">Node</text>
    </svg>
  ),
  Express: () => (
    <svg viewBox="0 0 32 32" width="18" height="18">
      <text x="4" y="20" fontSize="10" fontWeight="700" fill="#e5e5e5" fontFamily="monospace" opacity="0.6">exp</text>
    </svg>
  ),
  GraphQL: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="16" cy="16" r="3" fill="#e10098" opacity="0.8"/>
      {[0,60,120,180,240,300].map((deg, i) => {
        const r = 11, rad = (deg * Math.PI) / 180;
        return <line key={i} x1="16" y1="16" x2={16 + r * Math.sin(rad)} y2={16 - r * Math.cos(rad)} stroke="#e10098" strokeWidth="1.5" opacity="0.5"/>;
      })}
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <path d="M16 4c0 0-7 8-7 14a7 7 0 0014 0C23 12 16 4 16 4z" stroke="#4faa41" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <line x1="16" y1="18" x2="16" y2="28" stroke="#4faa41" strokeWidth="1.5" opacity="0.6"/>
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
  LangChain: () => (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
      <circle cx="8" cy="16" r="4" stroke="#1c7c54" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <circle cx="24" cy="16" r="4" stroke="#1c7c54" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <path d="M12 16h8" stroke="#1c7c54" strokeWidth="2" opacity="0.8"/>
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
};

const skillGroups = [
  {
    category: 'Languages',
    catIcon: '{ }',
    skills: [
      { name: 'C / C++', Icon: Icons.C },
      { name: 'JavaScript', Icon: Icons.JavaScript },
      { name: 'Python', Icon: Icons.Python },
      { name: 'HTML / CSS', Icon: Icons.HTML },
      { name: 'TypeScript', Icon: Icons.TypeScript },
    ],
  },
  {
    category: 'Frontend',
    catIcon: '◈',
    skills: [
      { name: 'React.js', Icon: Icons.React },
      { name: 'Tailwind CSS', Icon: Icons.Tailwind },
      { name: 'Redux', Icon: Icons.Redux },
      { name: 'Framer Motion', Icon: Icons.NextJS },
      { name: 'Next.js', Icon: Icons.NextJS },
    ],
  },
  {
    category: 'Backend',
    catIcon: '⚙',
    skills: [
      { name: 'Node.js', Icon: Icons.NodeJS },
      { name: 'Express.js', Icon: Icons.Express },
      { name: 'REST APIs', Icon: Icons.NodeJS },
      { name: 'JWT / OAuth', Icon: Icons.Git },
      { name: 'GraphQL', Icon: Icons.GraphQL },
    ],
  },
  {
    category: 'Database & Tools',
    catIcon: '⬡',
    skills: [
      { name: 'MongoDB', Icon: Icons.MongoDB },
      { name: 'Git & GitHub', Icon: Icons.Git },
      { name: 'Postman', Icon: Icons.Express },
      { name: 'VS Code', Icon: Icons.TypeScript },
      { name: 'Docker', Icon: Icons.Docker },
    ],
  },
  {
    category: 'Data Science',
    catIcon: '∑',
    skills: [
      { name: 'NumPy', Icon: Icons.NumPy },
      { name: 'Pandas', Icon: Icons.Pandas },
      { name: 'Matplotlib', Icon: Icons.Matplotlib },
      { name: 'Seaborn', Icon: Icons.Seaborn },
      { name: 'LangChain', Icon: Icons.LangChain },
      { name: 'RAG', Icon: Icons.RAG },
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
        padding: '32px',
        position: 'relative',
        transition: 'border-color 0.3s',
        flex: '1 1 180px',
        minWidth: '0',
      }}
      whileHover={{ borderColor: 'var(--accent)' }}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '22px',
        color: 'var(--accent)',
        marginBottom: '12px',
        fontStyle: 'italic',
        opacity: 0.8,
      }}>
        {group.catIcon}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '17px', fontWeight: 500,
        color: 'var(--text)', marginBottom: '24px',
        letterSpacing: '-0.01em',
        fontStyle: 'italic',
      }}>
        {group.category}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {group.skills.map(({ name, Icon }, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '10px'
          }}>
            <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
              <Icon />
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 400 }}>
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
    <section id="skills" style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
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
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          {skillGroups.map((group, i) => (
            <SkillCard key={i} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
