import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
    title: 'Expenser',
    description: 'App to track your expenses',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang='en'
            className={cn(
                'bg-background text-slate-900 antialiased light',
                inter.className
            )}
        >
            <body className='min-h-screen  bg-background antialiased'>
                <div className='container max-w-7xl h-full  items-center '>
                    {children}
                </div>
            </body>
        </html>
    );
}
