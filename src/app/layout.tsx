import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Navbar from '@/components/shared/Navbar';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Navigation from '@/components/shared/UpdatedNav';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';
import Providers from '@/providers/Providers';
import ClientToaster from '@/components/ClientToaster/ClientToaster';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster position="top-center" />
          {children}
          <ClientToaster></ClientToaster>
        </body>
      </Providers>
    </html>
  );
}
