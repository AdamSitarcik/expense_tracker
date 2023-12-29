import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Expenser',
    description: 'App to track your expenses',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
}
