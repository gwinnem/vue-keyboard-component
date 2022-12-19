const { resolve } = require(`path`);
module.exports = {
  root: true,
  extends: [
    `vue-typescript-linting-rules`,
  ],
  parserOptions: {
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
  }
}
