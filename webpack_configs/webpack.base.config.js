import Config from 'webpack-config'
import path from 'path'

export default new Config().merge({
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/../public')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
})
