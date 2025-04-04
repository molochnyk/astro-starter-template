module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-normalize")({ forceImport: "sanitize.css" }),
    require("postcss-preset-env")({ stage: 1 }),
    require("cssnano")({ preset: "default" }),
  ],
};
