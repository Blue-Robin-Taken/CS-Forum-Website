import type { Metadata } from 'next';
import './globals.css';
import Background from './components/background';

// Components
import NavBar from './components/navbar';

export const metadata: Metadata = {
  title: 'Allen CS Forum',
  description: 'Website created by the Allen CS Forum',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`p-0 m-0`}>
        <NavBar />
        <div className="fixed inset-0 -z-10">
          <Background />
        </div>
        <div id="tsparticles">{children}</div>
      </body>
    </html>
  );
}
