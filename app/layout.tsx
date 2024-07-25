import React from 'react';
import './globals.css';
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

export const metadata = {
  title: 'Convo Freaks',
  description: 'Convo Freaks - Home',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html
          lang="en"
          className={clsx(
              'h-full scroll-smooth bg-white antialiased',
              inter.variable,
              lexend.variable,
          )}
      >
      <body className="flex h-full flex-col">{children}</body>
      </html>
  )
}
