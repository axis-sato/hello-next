// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@pages": path.resolve(__dirname, "./pages"),
      "@components": path.resolve(__dirname, "./components"),
      "@core": path.resolve(__dirname, "./core"),
    };
    return config;
  },
};
