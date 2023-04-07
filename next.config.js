/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEON_DATABASE_URL:
      "postgres://mr.junaid.ca:Of8jtYhgeH4C@ep-red-thunder-428017.us-east-2.aws.neon.tech/neondb",
  },
};

module.exports = nextConfig;
