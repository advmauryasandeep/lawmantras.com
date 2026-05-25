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
