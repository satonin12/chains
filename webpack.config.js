const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // context: path.join(__dirname, 'src'),
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  },
  resolve : {
    extensions : ['.css', '.js', '.json' ]
  },
  optimization : {
    splitChunks : {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename : 'index.css'
    })
  ]
}
