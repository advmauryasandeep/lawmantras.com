export const metadata = {
  title: 'Lawmantras',
  description: 'Trusted legal educational platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HQZHZKHB17"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HQZHZKHB17');
            `,
          }}
        />
      </head>

      <body
        style={{
          margin: 0,
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f9fafb',
          color: '#111827',
        }}
      >
        {children}
      </body>
    </html>
  )
}
