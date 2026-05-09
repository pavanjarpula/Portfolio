import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['C / C++', 'JavaScript', 'Python', 'HTML / CSS', 'TypeScript'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'Redux', 'Framer Motion', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT / OAuth', 'GraphQL'],
  },
  {
    category: 'Database & Tools',
    skills: ['MongoDB', 'Git & GitHub', 'Postman', 'VS Code', 'Docker'],
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
        padding: '40px',
        position: 'relative',
        transition: 'border-color 0.3s',
      }}
      whileHover={{ borderColor: 'var(--text-muted)' }}
    >
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '20px', fontWeight: 500,
        color: 'var(--text)', marginBottom: '32px',
        letterSpacing: '-0.01em',
        fontStyle: 'italic',
      }}>
        {group.category}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {group.skills.map((skill, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '12px'
          }}>
            <span style={{
              width: '4px', height: '4px', background: 'var(--accent)', borderRadius: '50%'
            }} />
            <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 400 }}>
              {skill}
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
        {/* Header */}
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

        {/* Skill Cards Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}>
          {skillGroups.map((group, i) => (
            <SkillCard key={i} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
