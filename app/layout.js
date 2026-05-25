
export const metadata = {
  title: 'Lawmantras',
  description: 'Legal educational platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
