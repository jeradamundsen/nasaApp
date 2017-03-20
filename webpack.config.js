var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var commonsChunkPlugin = require('webpack/lib/optimize/commonsChunkPlugin')

module.exports = {
devtool: 'cheap-module-source-map',

entry: {
  app: path.join(__dirname, 'src','app.js'),
  vendor: 'angular'
},
output: {
path: path.join(__dirname,'dist'),
filename: '[name].bundle.js'
},
module: {
  loaders: [

    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader'
    },
     {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.(jpg|jpeg|png)$/,
      loader: 'file-loader'

    }
  ],
},
  devServer: {
  contentBase: path.join(__dirname,'dist')

},
plugins: [
  new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
   }),
  new htmlWebpackPlugin({
    template: path.join( __dirname, 'src','index.html'),
    chunks: ['commons','app']
  }),
  new commonsChunkPlugin({
            name: "commons"
        })


]

};
