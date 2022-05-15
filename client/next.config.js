module.exports = {
  reactStrictMode: true,
  future: { webpack5: true },
  target: 'serverless',
  distDir: 'out',
  env: {
		API_URL: 'http://localhost:4000/',
    SOCKET_URL: 'ws://localhost:4000'
	},
}