const { parsed: localEnv } = require("dotenv").config();
const withCSS = require("@zeit/next-css");

const webpack = require("webpack");
const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);
const apiUrl = JSON.stringify(process.env.HOST);

module.exports = withCSS({
  webpack: (config) => {
    const env = { API_KEY: apiKey, APP_URL: apiUrl };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
});
