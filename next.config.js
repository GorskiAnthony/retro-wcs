/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		serverActions: true,
	},
	env: {
		GIPHY_API_KEY: process.env.GIPHY_API_KEY,
	},
};

module.exports = nextConfig;
