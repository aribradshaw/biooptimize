import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BioOptimize - Research Peptides & Optimization',
  description: 'Premium research peptides for scientific advancement and optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
