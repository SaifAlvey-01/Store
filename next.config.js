/** @type {import('next').NextConfig} */
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "node_modules/tinymce"),
            to: path.join(__dirname, "public/assets/libs/tinymce"),
          },
        ],
      })
    );
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  env: {
    BASE_URL: "https://api.launchmystore.io",
    GOOGLE_CLIENT_ID:"126868255686-jmsmtbjg8c1i37och32l4go6hdfc6bsj.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET:"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"
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     env: {
//       BASE_URL: "https://api.launchmystore.io",
//       GOOGLE_CLIENT_ID:"126868255686-jmsmtbjg8c1i37och32l4go6hdfc6bsj.apps.googleusercontent.com",
//       GOOGLE_CLIENT_SECRET:"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"
//     },
//   }
  

//   module.exports = nextConfig