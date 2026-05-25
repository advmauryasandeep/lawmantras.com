
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header
        style={{
          background: '#111827',
          color: '#ffffff',
          padding: '20px',
        }}
      >
        <h1>Lawmantras</h1>

        <nav
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" style={{ color: '#ffffff' }}>Home</Link>
          <Link href="/blog" style={{ color: '#ffffff' }}>Blog</Link>
          <Link href="/about" style={{ color: '#ffffff' }}>About</Link>
          <Link href="/contact" style={{ color: '#ffffff' }}>Contact</Link>
        </nav>
      </header>

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
      </section>

      <footer
        style={{
          marginTop: '60px',
          padding: '20px',
          background: '#111827',
          color: '#ffffff',
        }}
      >
        <p>© Lawmantras</p>
      </footer>
    </main>
  )
}
