const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/hagairaja.github.io': '',
    output: 'export',
    distDir: 'dist',
}

module.exports = nextConfig;