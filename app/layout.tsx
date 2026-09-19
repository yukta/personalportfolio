import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhay Raj Malhotra | Software Engineer & Architect',
  description: 'Abhay Raj Malhotra is a senior software engineer and software architect specializing in backend engineering, cloud architecture, AWS, Java, Spring Boot, distributed systems, and AI.',
  keywords: [
    'Abhay Raj Malhotra',
    'Abhay Malhotra',
    'Abhay',
    'software engineer Abhay',
    'software architect Abhay Raj Malhotra',
    'backend engineer',
    'cloud architect',
    'Java engineer',
    'Spring Boot engineer',
    'AWS engineer',
    'Kubernetes engineer',
    'distributed systems engineer',
    'AI engineer',
  ],
  authors: [{ name: 'Abhay Raj Malhotra' }],
  creator: 'Abhay Raj Malhotra',
  publisher: 'Abhay Raj Malhotra',
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Abhay Raj Malhotra | Software Engineer & Architect',
    description: 'Abhay Raj Malhotra is a senior software engineer and software architect specializing in backend engineering, cloud architecture, AWS, Java, Spring Boot, distributed systems, and AI.',
    siteName: 'Abhay Raj Malhotra',
    images: ['/icon.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Raj Malhotra | Software Engineer & Architect',
    description: 'Abhay Raj Malhotra is a senior software engineer and software architect specializing in backend engineering, cloud architecture, AWS, Java, Spring Boot, distributed systems, and AI.',
    images: ['/icon.svg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1efe7' },
    { media: '(prefers-color-scheme: dark)', color: '#151918' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
