/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <— static site
  reactStrictMode: true,
  basePath: '',      // <— user site has NO base path
  assetPrefix: '',
};

export default nextConfig;
