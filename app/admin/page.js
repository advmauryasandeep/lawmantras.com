
'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')

  const handlePublish = async () => {
    alert('Firebase integration ready. Connect Firestore saving logic next.')
  }

  return (
    <main
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Arial',
      }}
    >
      <h1>Lawmantras Admin Panel</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        <input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: '14px',
            fontSize: '16px',
          }}
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: '14px',
            fontSize: '16px',
          }}
        />

        <textarea
          placeholder="Write article content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={14}
          style={{
            padding: '14px',
            fontSize: '16px',
          }}
        />

        <button
          onClick={handlePublish}
          style={{
            background: '#07152f',
            color: '#ffffff',
            border: 'none',
            padding: '16px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Publish Post
        </button>
      </div>
    </main>
  )
}
