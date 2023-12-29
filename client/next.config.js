/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/expense',
                destination: 'http://localhost:8080/api/expense',
            }
        ];
    },
};

module.exports = nextConfig;
