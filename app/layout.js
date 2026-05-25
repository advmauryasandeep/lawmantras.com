
export const metadata = {
  title: 'Lawmantras',
  description: 'Legal educational platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
