import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Background from './components/background';

// Components
import NavBar from './components/navbar';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

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
            <head>
                <script src="tsparticles.engine.min.js"></script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased p-0 m-0`}
            >
                <NavBar />
                <div className="fixed inset-0 -z-10">
                    <Background />
                </div>
                <div id="tsparticles">{children}</div>
            </body>
        </html>
    );
}
