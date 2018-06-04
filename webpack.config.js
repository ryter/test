let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const conf = {
  entry: {
    app: './src/js/app.js',
    page: './src/slim/index.slim'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/app.js',
    publicPath: 'dist/'
  },

  devServer: {
    contentBase: path.join(__dirname, '../src'),
  //  compress: true,
    port: 9000
  },

  module: {
    rules: [
        {
          test: /\.slim$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: false
                }
              }, {
                loader: 'slim-lang-loader',
                options: {
                  slimOptions: {
                    'pretty': true
                  }
                }
              }
            ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('index.html')
  ]
};

console.log(conf);

module.exports = conf;
