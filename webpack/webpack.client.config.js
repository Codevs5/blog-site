module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/../public/'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react']
        }
      },
      {
          test: /\.s?css$/,
          loader: "style-loader!css-loader!sass-loader"
      }
    ]
  }
}
