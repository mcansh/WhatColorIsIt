// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('./package.json');

const env = {
  'process.env.VERSION': version,
};

module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [
    'styled-components',
    'root-import',
    ['transform-define', env],
  ],
};
