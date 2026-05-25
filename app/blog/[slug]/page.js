
import { posts } from '../../../data/posts'

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return <h1>Post Not Found</h1>
  }

  return (
    <main
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px',
        background: '#ffffff',
      }}
    >
      <p style={{ color: '#2563eb' }}>
        {post.category}
      </p>

      <h1>{post.title}</h1>

      <p style={{ lineHeight: '1.9' }}>
        {post.content}
      </p>
    </main>
  )
}
