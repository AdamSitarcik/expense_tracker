import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                background: '#f8fafc',
                foreground: '#0f172a',
                primary: { DEFAULT: '#1e293b', foreground: '#f1f5f9' },
                secondary: { DEFAULT: '#e2e8f0', foreground: '#0f172a' },
                accent: { DEFAULT: '#cbd5e1', foreground: '#1e293b' },
                muted: {DEFAULT: '#94a3b8'}
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [],
};
export default config;
