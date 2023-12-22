import { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import './globals.css';
 
export const metadata: Metadata = {
  title: 'Expenser',
  description: 'App to track your expenses',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <SessionProvider>
                    <div>{children}</div>
                </SessionProvider>
            </body>
        </html>
    );
}
