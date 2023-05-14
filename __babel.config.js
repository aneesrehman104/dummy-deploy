// babel.config.js
module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' }}],
      '@babel/preset-react',
      '@babel/preset-typescript', // if you're using TypeScript
    ],
  };
  