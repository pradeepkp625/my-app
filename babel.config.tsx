module.exports = {
  plugins: [
    'syntax-dynamic-import',
    'transform-runtime',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties'
  ],
  presets: [
    [
      'es2015',
      {
        modules: false
      }
    ],
    'react',
    'stage-0',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow'
  ],
  env: {
    start: {
      presets: ['react-hmre']
    },
    jest: {
      presets: ['es2015', 'react', 'stage-0']
    }
  }
};
