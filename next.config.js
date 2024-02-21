require('dotenv').config();

const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PAYLOAD_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_PAYLOAD_HOSTNAME,
        port: process.env.NEXT_PUBLIC_PAYLOAD_PORT,
        pathname: '**',
      },
    ],
  },
};

//console.log(config.images.remotePatterns);

module.exports = config;
