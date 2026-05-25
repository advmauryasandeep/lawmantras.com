
import Link from 'next/link'

const featuredArticles = [
  {
    title: 'How to Pass AIBE Using Bare Acts',
    category: 'AIBE Preparation',
    link: '/blog/legal-article-1',
  },
  {
    title: 'Difference Between IPC and BNS',
    category: 'Bare Acts',
    link: '/blog/legal-article-2',
  },
  {
    title: 'Judiciary Preparation Roadmap',
    category: 'Judiciary Preparation',
    link: '/blog/legal-article-3',
  },
  {
    title: 'Litigation vs Corporate Law',
    category: 'Legal Career Guidance',
    link: '/blog/legal-article-4',
  },
  {
    title: 'Supreme Court Judgments Explained',
    category: 'Legal News Explained',
    link: '/blog/legal-article-5',
  },
  {
    title: 'Bare Act Navigation Techniques',
    category: 'AIBE Preparation',
    link: '/blog/legal-article-6',
  },
]

const categories = [
  'AIBE Preparation',
  'Bare Acts',
  'Judiciary Preparation',
  'Legal Career Guidance',
  'Legal News Explained',
]

export default function Home() {
  return (
    <main>
      <header
        style={{
          background: '#07152f',
          color: '#ffffff',
          padding: '25px',
        }}
      >
        <h1 style={{ fontSize: '54px', marginBottom: '20px' }}>
          Lawmantras
        </h1>

        <nav
          style={{
            display: 'flex',
            gap: '24px',
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
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '70px 20px',
        }}
      >
        <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>
          Trusted Legal Educational Platform
        </h2>

        <p
          style={{
            fontSize: '22px',
            lineHeight: '1.9',
            maxWidth: '900px',
          }}
        >
          Lawmantras focuses on AIBE preparation, Bare Acts,
          judiciary preparation, legal awareness and legal career guidance
          through simplified educational resources and structured guidance.
        </p>

        <div style={{ marginTop: '35px' }}>
          <a
            href="https://aibeprep.lawmantras.com"
            style={{
              display: 'inline-block',
              padding: '16px 24px',
              background: '#07152f',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
            }}
          >
            Visit AIBE Prep Portal
          </a>
        </div>
      </section>

      <section
        style={{
          background: '#f3f4f6',
          padding: '60px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h2 style={{ marginBottom: '30px' }}>
            Featured Categories
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {categories.map((category) => (
              <div
                key={category}
                style={{
                  background: '#ffffff',
                  padding: '25px',
                  borderRadius: '14px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <h3>{category}</h3>

                <p style={{ lineHeight: '1.7' }}>
                  Educational legal content and structured guidance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '70px 20px',
        }}
      >
        <h2 style={{ marginBottom: '30px' }}>
          Latest Articles
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {featuredArticles.map((article) => (
            <div
              key={article.title}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                background: '#ffffff',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '180px',
                  background: '#dbeafe',
                }}
              />

              <div style={{ padding: '20px' }}>
                <p
                  style={{
                    color: '#2563eb',
                    fontSize: '14px',
                  }}
                >
                  {article.category}
                </p>

                <h3 style={{ lineHeight: '1.5' }}>
                  {article.title}
                </h3>

                <Link href={article.link}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: '#f9fafb',
          padding: '70px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <h2>Why Trust Lawmantras?</h2>

          <ul
            style={{
              lineHeight: '2',
              fontSize: '18px',
            }}
          >
            <li>Simplified legal education resources</li>
            <li>AIBE-focused preparation guidance</li>
            <li>Bare Act learning techniques</li>
            <li>Judiciary preparation support</li>
            <li>Student-friendly explanations</li>
          </ul>
        </div>
      </section>

      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '70px 20px',
        }}
      >
        <h2>About Lawmantras</h2>

        <p
          style={{
            lineHeight: '2',
            fontSize: '18px',
          }}
        >
          Lawmantras is an educational legal platform focused on helping
          law students, AIBE aspirants and judiciary candidates through
          simplified legal guidance, structured educational content and
          legal awareness initiatives.
        </p>
      </section>

      <footer
        style={{
          background: '#07152f',
          color: '#ffffff',
          padding: '40px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '20px',
            }}
          >
            <Link href="/about" style={{ color: '#ffffff' }}>About</Link>
            <Link href="/contact" style={{ color: '#ffffff' }}>Contact</Link>
            <Link href="/privacy-policy" style={{ color: '#ffffff' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#ffffff' }}>Terms</Link>
            <Link href="/disclaimer" style={{ color: '#ffffff' }}>Disclaimer</Link>
            <Link href="/blog" style={{ color: '#ffffff' }}>Blog</Link>
          </div>

          <p>© Lawmantras</p>
        </div>
      </footer>
    </main>
  )
}
