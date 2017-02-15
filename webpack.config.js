var webpack = require('webpack')
module.exports = {
  devtool: 'inline-source-map',
  entry : [
    'webpack-hot-middleware/client',
    './client/client.js'
],
  output: {
    path: require('path').resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins:[
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module:{
    loaders:[
      {
        test: /\.(jpe?g|png)$/,
        loader: "url-loader?limit=20000"
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   loader: "file-loader?name=/public/icons/[name].[ext]"
      // },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre', 'stage-2']
        }
      }
    ]
  }
}
