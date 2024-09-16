const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/hagairaja.github.io': '',
    output: 'export',
    distDir: 'dist',
    assetPrefix: isProd ? '/assets/' : '',
}

module.exports = nextConfig;