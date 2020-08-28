module.exports = {
  entry: {
    main: './src/try02/main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'Winter' }]]
          }
        }
      }
    ]
  },

  mode: 'development',
  optimization: {
    minimize: false,
  }
}