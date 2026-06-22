import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ujjwal Kumar Karn — AI Engineer & ECE Developer',
  description: 'Electronics & Communication Engineering graduate building intelligent solutions with AI, Machine Learning, LLMs, RAG, and modern software technologies.',
  keywords: ['AI Engineer', 'Machine Learning', 'LLM', 'RAG', 'FastAPI', 'Nepal', 'ECE', 'Portfolio'],
  authors: [{ name: 'Ujjwal Kumar Karn' }],
  openGraph: {
    title: 'Ujjwal Kumar Karn — AI Engineer',
    description: 'Building intelligent solutions with AI, ML, and modern software technologies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ujjwal Kumar Karn — AI Engineer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('light', theme === 'light');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
