
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div
        style={{
          padding: '20px',
          background: '#111827',
          color: '#ffffff',
        }}
      >
        <h1>Lawmantras</h1>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#ffffff' }}>Home</Link>
          <Link href="/blog" style={{ color: '#ffffff' }}>Blog</Link>
          <Link href="/about" style={{ color: '#ffffff' }}>About</Link>
          <Link href="/contact" style={{ color: '#ffffff' }}>Contact</Link>
        </div>
      </div>

      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '40px 20px',
        }}
      >
        <h2>Trusted Legal Educational Platform</h2>

        <p style={{ lineHeight: '1.8' }}>
          Lawmantras focuses on AIBE preparation, Bare Acts,
          judiciary preparation, legal awareness and legal career guidance.
        </p>

        <a
          href="https://aibeprep.lawmantras.com"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '12px 18px',
            background: '#111827',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '8px',
          }}
        >
          Visit AIBE Prep Portal
        </a>

        <h3 style={{ marginTop: '40px' }}>Categories</h3>

        <ul style={{ lineHeight: '2' }}>
          <li>AIBE Preparation</li>
          <li>Bare Acts</li>
          <li>Judiciary Preparation</li>
          <li>Legal News Explained</li>
          <li>Legal Career Guidance</li>
        </ul>
      </section>
    </main>
  )
}
