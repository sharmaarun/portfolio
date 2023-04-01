/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.vert$/,
      use: 'raw-loader',
    })
    config.module.rules.push({
      test: /\.frag$/,
      use: 'raw-loader',
    })
    return config
  }
}

module.exports = nextConfig
