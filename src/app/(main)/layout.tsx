import '../globals.css';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { Inter } from 'next/font/google';
import AppShell from '../components/AppShell';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.className} h-full bg-white`}>
        <body className="h-full">
          <AppShell>{children}</AppShell>
        </body>
      </html>
    </ClerkProvider>
  );
}
