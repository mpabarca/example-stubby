/** @type {import('next').NextConfig} */

const ENV = process.env.DEPLOY_ENVIRONMENT || 'local';
const LOCAL_PORT_BFF = process.env.LOCAL_PORT_BFF || 8080;

const getUrlsByEnvironment = {
  local: {
    BFF: `http://localhost:${LOCAL_PORT_BFF}`,
  },
  prod: {
    BFF: 'https://www.latamairlines.com',
  },
};

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    ...getUrlsByEnvironment[ENV]
  }
}

module.exports = nextConfig
