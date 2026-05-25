import Link from 'next/link'

const featuredArticles = [
  {
    title: 'How to Pass AIBE Using Bare Acts',
    category: 'AIBE Preparation',
    link: '/blog/legal-article-1',
    image: '/images/legal_image_01.jpg',
  },
  {
    title: 'Difference Between IPC and BNS',
    category: 'Bare Acts',
    link: '/blog/legal-article-2',
    image: '/images/legal_image_02.jpg',
  },
  {
    title: 'Judiciary Preparation Roadmap',
    category: 'Judiciary Preparation',
    link: '/blog/legal-article-3',
    image: '/images/legal_image_03.jpg',
  },
  {
    title: 'Litigation vs Corporate Law',
    category: 'Legal Career Guidance',
    link: '/blog/legal-article-4',
    image: '/images/legal_image_04.jpg',
  },
  {
    title: 'Supreme Court Judgments Explained',
    category: 'Legal News Explained',
    link: '/blog/legal-article-5',
    image: '/images/legal_image_05.jpg',
  },
  {
    title: 'Bare Act Navigation Techniques',
    category: 'AIBE Preparation',
    link: '/blog/legal-article-6',
    image: '/images/legal_image_06.jpg',
  },
]

const categories = [
  {
    title: 'AIBE Preparation',
    description: 'Structured AIBE preparation guidance and study techniques.',
  },
  {
    title: 'Bare Acts',
    description: 'Simplified Bare Act understanding and navigation methods.',
  },
  {
    title: 'Judiciary Preparation',
    description: 'Roadmaps and preparation strategies for judiciary exams.',
  },
  {
    title: 'Legal Career Guidance',
    description: 'Career insights for litigation, corporate law and judiciary.',
  },
  {
    title: 'Legal News Explained',
    description: 'Important legal developments explained in simple language.',
  },
]

export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        background: '#f5f7fb',
        color: '#07152f',
      }}
    >
      <header
        style={{
          background: '#07152f',
          color: '#ffffff',
          padding: '30px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontSize: '52px',
              marginBottom: '18px',
            }}
          >
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
        </div>
      </header>

      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 20px',
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            marginBottom: '20px',
            lineHeight: '1.3',
          }}
        >
          Trusted Legal Educational Platform
        </h2>

        <p
          style={{
            fontSize: '22px',
            lineHeight: '1.9',
            maxWidth: '900px',
          }}
        >
          Lawmantras provides simplified legal educational resources focused
          on AIBE preparation, Bare Acts, judiciary preparation,
          legal awareness and legal career guidance.
        </p>

        <div style={{ marginTop: '40px' }}>
          <a
            href="https://aibeprep.lawmantras.com"
            style={{
              display: 'inline-block',
              padding: '18px 28px',
              background: '#07152f',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            Visit AIBE Prep Portal
          </a>
        </div>
      </section>

      <section
        style={{
          background: '#eef2f7',
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              marginBottom: '40px',
              fontSize: '42px',
            }}
          >
            Featured Categories
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}
          >
            {categories.map((category, index) => (
              <div
                key={category.title}
                style={{
                  background: '#07152f',
                  color: '#ffffff',
                  padding: '24px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                }}
              >
                <img
                  src={`/images/legal_image_0${index + 1}.jpg`}
                  alt={category.title}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '20px',
                  }}
                />

                <h3
                  style={{
                    marginBottom: '16px',
                    lineHeight: '1.4',
                    fontSize: '28px',
                  }}
                >
                  {category.title}
                </h3>

                <p
                  style={{
                    lineHeight: '1.9',
                    color: '#d1d5db',
                    fontSize: '17px',
                  }}
                >
                  {category.description}
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
          padding: '80px 20px',
        }}
      >
        <h2
          style={{
            marginBottom: '35px',
            fontSize: '38px',
          }}
        >
          Latest Articles
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {featuredArticles.map((article) => (
            <div
              key={article.title}
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #dbe4ef',
                boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <div style={{ padding: '24px' }}>
                <p
                  style={{
                    color: '#2563eb',
                    fontSize: '14px',
                    marginBottom: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  {article.category}
                </p>

                <h3
                  style={{
                    lineHeight: '1.5',
                    marginBottom: '20px',
                  }}
                >
                  {article.title}
                </h3>

                <Link
                  href={article.link}
                  style={{
                    color: '#07152f',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: '#eef2f7',
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '38px',
              marginBottom: '24px',
            }}
          >
            Why Trust Lawmantras?
          </h2>

          <ul
            style={{
              lineHeight: '2',
              fontSize: '20px',
              color: '#374151',
            }}
          >
            <li>Simplified legal education resources</li>
            <li>AIBE-focused preparation guidance</li>
            <li>Bare Act learning techniques</li>
            <li>Judiciary preparation support</li>
            <li>Student-friendly explanations</li>
            <li>Structured educational articles and updates</li>
          </ul>
        </div>
      </section>

      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '80px 20px',
        }}
      >
        <h2
          style={{
            fontSize: '38px',
            marginBottom: '24px',
          }}
        >
          About Lawmantras
        </h2>

        <p
          style={{
            lineHeight: '2',
            fontSize: '19px',
            color: '#374151',
          }}
        >
          Lawmantras is an educational legal platform helping law students,
          AIBE aspirants and judiciary candidates through simplified legal
          guidance, structured educational resources and legal awareness
          initiatives designed for practical learning.
        </p>
      </section>

      <footer
        style={{
          background: '#07152f',
          color: '#ffffff',
          padding: '50px 20px',
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
              gap: '22px',
              flexWrap: 'wrap',
              marginBottom: '22px',
            }}
          >
            <Link href="/about" style={{ color: '#ffffff' }}>About</Link>
            <Link href="/contact" style={{ color: '#ffffff' }}>Contact</Link>
            <Link href="/privacy-policy" style={{ color: '#ffffff' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#ffffff' }}>Terms</Link>
            <Link href="/disclaimer" style={{ color: '#ffffff' }}>Disclaimer</Link>
            <Link href="/blog" style={{ color: '#ffffff' }}>Blog</Link>
          </div>

          <p
            style={{
              color: '#d1d5db',
            }}
          >
            © Lawmantras — Educational Legal Platform
          </p>
        </div>
      </footer>
    </main>
  )
}
