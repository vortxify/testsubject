import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Demo',
  description: 'Bilingual school demo website (EN/AR)'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
