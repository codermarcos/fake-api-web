const HtmlWebpackPlugin = require('html-webpack-plugin')
  , CleanWebpackPlugin = require('clean-webpack-plugin')
  , path = require('path');

module.exports = {
  entry: {
    'assets/index': './src/index/index.js',
    'assets/route': './src/route/route.js',
  },

  module: {
    rules: [
      {
        test: /\.(html|htm)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ["./src/assets/"]
          }
        }]
      }
      ,
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      template: 'src/index/index.html',
      filename: 'index.html',
      chunks: ['assets/index']
    }),
    new HtmlWebpackPlugin({
      template: 'src/route/route.html',
      filename: 'route/index.html',
      chunks: ['assets/route']
    })
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};
