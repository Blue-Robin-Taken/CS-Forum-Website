import type { Metadata } from 'next';
import './globals.css';
import Background from './components/background';
import Footer from './components/footer';
import { Viewport } from 'next';

// Components
import NavBar from './components/navbar';

export const metadata: Metadata = {
  title: 'Allen CS Forum',
  description: 'Website created by the Allen CS Forum',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`p-0 m-0 h-screen flex flex-col`}>
        <NavBar />
        <div className="fixed inset-0 -z-10">
          <Background />
        </div>
        <div id="tsparticles" className="m-4 mb-auto">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
