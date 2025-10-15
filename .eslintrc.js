module.exports = {
  settings: {
    react: {
      version: "detect", // automatically picks your installed React version
    },
  },

  env: {
    browser: true,
    es6: true,
    node: true, // <--- this fixes require, module, process

    "jest/globals": true,
  },
  rules: {
    "linebreak-style": 0, // disable linebreak-style mismatch on Windows
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
};
