/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['yahtzmen-storage.nyc3.cdn.digitaloceanspaces.com', 'yahtzmen-storage.nyc3.digitaloceanspaces.com']
    },
    reactStrictMode: true,
    swcMinify: true
}

module.exports = nextConfig
