/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'assets.aceternity.com' , 'www.shutterstock.com' , 'images.unsplash.com' , 'plus.unsplash.com' , 'yt3.googleusercontent.com' , 'apps.codepolitan.com' , 'api.microlink.io' , 'cdn.discordapp.com'
    ],
  }
};

export default nextConfig;