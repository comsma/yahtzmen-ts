/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        publicCdn: 'https://pub-871f4232e8624f8aa834379c193b823c.r2.dev'
    },
    images: {
        domains: ['yahtzmen-storage.nyc3.cdn.digitaloceanspaces.com', 'yahtzmen-storage.nyc3.digitaloceanspaces.com', 'pub-871f4232e8624f8aa834379c193b823c.r2.dev']
    },
    experimental: {
        runtime: 'experimental-edge',
    },
    reactStrictMode: true,
    swcMinify: true
}

module.exports = nextConfig
