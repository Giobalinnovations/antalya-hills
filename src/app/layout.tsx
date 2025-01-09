import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title:
    'M3M Antalya Hills - Luxury Apartments in Gurugram Beginning at ₹2.19 Cr',
  description:
    'Discover M3M Antalya Hills in Gurugram for opulent 1, 2, and 3-bedroom homes with contemporary conveniences, breathtaking views, and calm surroundings. Prices start at ₹2.19 Cr. Experience now the ideal fusion of sophistication and peace!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
