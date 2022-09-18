/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['yahtzmen-storage.nyc3.cdn.digitaloceanspaces.com'],
        loader: 'akamai',
        path: ''
    },
    reactStrictMode: true,
    swcMinify: true
}

module.exports = nextConfig
