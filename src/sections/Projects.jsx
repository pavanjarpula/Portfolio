import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'Text-to-Learn',
    subtitle: 'AI-Powered Course Generator',
    description:
      'Full-stack AI course builder that auto-generates 3–6 modules and 15+ lessons. Features polymorphic lesson rendering, OAuth 2.0 auth, multilingual audio, and PDF export.',
    tags: ['Node.js', 'React', 'MongoDB', 'OAuth 2.0', 'Express', 'jsPDF'],
    color: '#7b68ee',
    accent: '#00d4ff',
    link: '#',
    github: 'https://github.com/pavanjarpula',
    metrics: ['15+ Lessons/Course', 'OAuth 2.0 Auth', 'Multilingual'],
    year: '2025',
  },
  {
    id: '02',
    title: "Rubik's Cube Solver",
    subtitle: 'Algorithmic Visualization Engine',
    description:
      'Virtual 3×3 Rubik\'s Cube with BFS, DFS, IDDFS and Korf\'s IDA* algorithms. Solves cubes in under 4 seconds. Uses nibble arrays for memory optimization.',
    tags: ['C++', 'STL', 'IDA*', 'BFS', 'DFS', 'OOP'],
    color: '#ff6b35',
    accent: '#ffd166',
    link: '#',
    github: 'https://github.com/pavanjarpula',
    metrics: ['< 4s Solve Time', 'IDA* Algorithm', 'Memory Optimized'],
    year: '2025',
  },
  {
    id: '03',
    title: 'Whiteboard App',
    subtitle: 'Collaborative Drawing Canvas',
    description:
      'React-based whiteboard with HTML5 Canvas featuring 5 drawing tools, custom color palette, brush sizes, and full undo/redo system via React Context API.',
    tags: ['React', 'HTML5 Canvas', 'Tailwind CSS', 'Vercel', 'Context API'],
    color: '#00d4ff',
    accent: '#7b68ee',
    link: '#',
    github: 'https://github.com/pavanjarpula',
    metrics: ['5 Drawing Tools', 'Undo/Redo', 'Deployed on Vercel'],
    year: '2024',
  },
  {
    id: '04',
    title: 'Email Scheduler',
    subtitle: 'Automated Communication Engine',
    description:
      'Python email scheduler automating 100+ emails/week with smtplib. Features async threading, 3+ scheduling options, retry mechanisms reducing failures by 90%.',
    tags: ['Python', 'smtplib', 'Threading', 'datetime', 'Automation'],
    color: '#c8a96e',
    accent: '#ff6b35',
    link: '#',
    github: 'https://github.com/pavanjarpula',
    metrics: ['100+ Emails/Week', '90% Fewer Failures', '2× Performance'],
    year: '2024',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 80 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        minWidth: '480px', maxWidth: '480px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '44px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.4s, transform 0.4s',
      }}
      whileHover={{ scale: 1.02, borderColor: project.color + '50' }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${project.color}, ${project.accent}, transparent)`,
      }} />

      {/* BG glow */}
      <div style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '200px', height: '200px', borderRadius: '50%',
        background: `radial-gradient(circle, ${project.color}10 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: project.color, letterSpacing: '0.2em',
            marginBottom: '8px',
          }}>
            {project.id} / {project.year}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '26px', fontWeight: 700,
            color: 'var(--text)', letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            {project.title}
          </h3>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
            {project.subtitle}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            style={{
              width: '36px', height: '36px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-muted)', fontSize: '14px',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = project.color; e.currentTarget.style.color = project.color; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            ↗
          </a>
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '14px', lineHeight: 1.8, color: 'var(--text-muted)',
        marginBottom: '28px', flexGrow: 1,
      }}>
        {project.description}
      </p>

      {/* Metrics */}
      <div style={{
        display: 'flex', gap: '8px', flexWrap: 'wrap',
        marginBottom: '24px',
      }}>
        {project.metrics.map((m, i) => (
          <div key={i} style={{
            padding: '6px 12px',
            background: project.color + '12',
            border: `1px solid ${project.color}25`,
            borderRadius: '100px',
            fontSize: '11px', fontWeight: 600,
            color: project.color, letterSpacing: '0.04em',
          }}>
            {m}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {project.tags.map((tag, i) => (
          <span key={i} style={{
            padding: '4px 10px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            borderRadius: '3px',
            fontSize: '11px', color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.04em',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Horizontal movement tied to vertical scroll
  const xOffset = useTransform(scrollYProgress, [0.1, 0.9], [0, -800]);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG */}
      <div style={{
        position: 'absolute', right: '-300px', bottom: '0',
        width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <div className="section-label">Selected Work</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h2 className="section-title">
              Projects &<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent3), var(--gold))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Case Studies</span>
            </h2>
            <div style={{ textAlign: 'right' }}>
              <a
                href="https://github.com/pavanjarpula"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  fontSize: '13px', fontWeight: 500,
                  border: '1px solid var(--border)',
                  padding: '10px 20px', borderRadius: '2px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                View All on GitHub ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scrolling card rail */}
      <div style={{ position: 'relative', paddingLeft: '48px' }}>
        <motion.div
          style={{
            display: 'flex', gap: '24px',
            x: xOffset,
            willChange: 'transform',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              minWidth: '300px',
              border: '1px dashed rgba(123,104,238,0.3)',
              borderRadius: '8px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '16px', padding: '44px',
              color: 'var(--text-muted)',
              textAlign: 'center',
            }}
          >
            <div style={{
              width: '60px', height: '60px',
              border: '1px solid rgba(123,104,238,0.3)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '24px', color: 'var(--accent)',
            }}>+</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--text)', fontWeight: 600 }}>
              More on GitHub
            </div>
            <div style={{ fontSize: '13px', lineHeight: 1.6 }}>
              Find all my open-source projects and contributions
            </div>
            <a
              href="https://github.com/pavanjarpula"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              style={{
                padding: '10px 24px',
                background: 'rgba(123,104,238,0.12)',
                border: '1px solid rgba(123,104,238,0.3)',
                borderRadius: '2px',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}
            >
              github.com/pavanjarpula
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
