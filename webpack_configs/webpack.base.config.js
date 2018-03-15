import Config from 'webpack-config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })]
})
