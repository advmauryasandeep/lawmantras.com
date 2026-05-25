
import Link from 'next/link'
import { posts } from '../../data/posts'

export default function BlogPage() {
  return (
    <main
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '40px 20px',
      }}
    >
      <h1>Legal Education Blog</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '20px',
            }}
          >
            <p style={{ color: '#2563eb', fontSize: '14px' }}>
              {post.category}
            </p>

            <h3>{post.title}</h3>

            <p>{post.excerpt}</p>

            <Link href={`/blog/${post.slug}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
