export default function Marquee() {
  const items = ['React', 'Node.js', 'C++', 'Python', 'JavaScript', 'MongoDB', 'Express', 'Three.js', 'Tailwind CSS', 'REST APIs', 'Redux', 'GSAP'];
  const items2 = ['DSA', 'Full Stack', 'WebGL', 'Git', 'Algorithms', 'System Design', 'OAuth 2.0', 'JWT', 'Framer Motion', 'Competitive Programming'];
  
  const Row = ({ list, reverse, speed }) => (
    <div style={{ display: 'flex', overflow: 'hidden', padding: '12px 0' }}>
      <div style={{
        display: 'flex', gap: '32px', whiteSpace: 'nowrap',
        animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
      }}>
        {[...list, ...list].map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            fontFamily: 'var(--font-display)',
            fontSize: '13px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: i % 3 === 0 ? 'var(--accent)' : i % 3 === 1 ? 'var(--text-muted)' : 'var(--text-subtle)',
          }}>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', opacity: 0.5 }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(123,104,238,0.02)',
      padding: '4px 0',
      overflow: 'hidden',
    }}>
      <Row list={items} reverse={false} speed={40} />
      <Row list={items2} reverse={true} speed={35} />
    </div>
  );
}
