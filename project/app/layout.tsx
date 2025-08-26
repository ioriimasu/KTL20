import './globals.css';
import React from 'react';
import { BrandLogo } from '../components/brand-logo';

export const metadata = {
  title: 'Kattali Textile Ltd',
  description: 'Kattali Textile Ltd - textiles',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="py-4 container-wide">
          <BrandLogo size="md" />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
