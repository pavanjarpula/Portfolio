import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const blogs = [
  {
    title: 'Building a RAG Pipeline from Scratch',
    excerpt: 'How I built a retrieval-augmented generation system using LangChain, Weaviate, and OpenAI embeddings for domain-specific Q&A.',
    date: 'Aug 2026',
    tag: 'AI / GenAI',
    color: '#7b68ee',
    glow: 'rgba(123, 104, 238, 0.12)',
  },
  {
    title: 'Scalability Challenges in C++ HTTP Server',
    excerpt: 'Lessons from building a multithreaded HTTP server — thread pools, epoll, and handling 10k concurrent connections.',
    date: 'Jun 2026',
    tag: 'Systems',
    color: '#e5c158',
    glow: 'rgba(229, 193, 88, 0.12)',
  },
  {
    title: 'Feature Engineering for Recommendation Systems',
    excerpt: 'How cold-start problems and user behavior signals shaped the ranking engine behind Text-to-Learn.',
    date: 'Apr 2026',
    tag: 'ML / Data',
    color: '#d4af37',
    glow: 'rgba(212, 175, 55, 0.12)',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="blog" style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}
        >
          <div>
            <div className="section-label">Thoughts</div>
            <h2 className="section-title">
              Writings &
              <br />
              <span style={{ color: 'var(--text-muted)' }}>Articles</span>
            </h2>
          </div>
          <p style={{
            maxWidth: '360px', color: 'var(--text-muted)',
            fontSize: '15px', lineHeight: 1.8,
            fontWeight: 300,
          }}>
            Deep dives into systems, AI, and things I've learned while building.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {blogs.map((blog, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: '-60px' });

            return (
              <motion.div
                ref={cardRef}
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  padding: '28px',
                  position: 'relative',
                  transition: 'border-color 0.3s, transform 0.3s',
                  cursor: 'default',
                }}
                whileHover={{ borderColor: blog.color + '50', transform: 'translateY(-4px)' }}
              >
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: blog.color, opacity: 0.7 }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    padding: '2px 10px', background: blog.glow, borderRadius: '4px',
                    fontSize: '10px', fontWeight: 600, color: blog.color, fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                  }}>{blog.tag}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>{blog.date}</div>
                </div>

                <h3 style={{
                  fontSize: '17px', fontWeight: 600, color: 'var(--text)',
                  marginBottom: '12px', lineHeight: 1.4, letterSpacing: '-0.01em',
                }}>{blog.title}</h3>

                <p style={{
                  fontSize: '13px', color: 'var(--text-muted)',
                  lineHeight: 1.6, margin: 0, fontWeight: 300,
                }}>{blog.excerpt}</p>

                <div style={{
                  marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px',
                  fontSize: '12px', color: blog.color, fontWeight: 500,
                  fontFamily: 'var(--font-mono)', letterSpacing: '0.02em',
                }}>
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
