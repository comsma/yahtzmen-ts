/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['yahtzmen-storage.nyc3.cdn.digitaloceanspaces.com', 'yahtzmen-storage.nyc3.digitaloceanspaces.com'],
        loader: 'custom',
        loaderFile: './helpers/cloudflare.image.ts'
    },
    experimental: {
        runtime: 'experimental-edge',
    },
    reactStrictMode: true,
    swcMinify: true
}

module.exports = nextConfig
