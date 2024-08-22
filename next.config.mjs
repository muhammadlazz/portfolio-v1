/** @type {import('next').NextConfig} */
import path from 'path';


const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Add custom webpack configurations here
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('src'),
    };

    return config;
  },
  reactStrictMode: false,
  typescript: {
    // Ignore TypeScript errors during the build process
    ignoreBuildErrors: true,
  },

  images: {
    domains: [
      'assets.aceternity.com' , 'www.shutterstock.com' , 'images.unsplash.com' , 'plus.unsplash.com' , 'yt3.googleusercontent.com' , 'apps.codepolitan.com' , 'api.microlink.io' , 'cdn.discordapp.com'
    ],
  }
  
};

export default nextConfig;