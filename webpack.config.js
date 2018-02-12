var webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
],
externals:{
  jquery:'jQuery'
},
plugins:[
  new webpack.ProvidePlugin({
    '$':'jquery',
    'jQuery':'jquery'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules:[
      __dirname,
      __dirname +'/node_modules',
      __dirname + '/app/components',
      __dirname + '/app/styles',
      __dirname + '/app/api',
      __dirname + '/app/firebase'
    ],
    alias: {
      index: 'index.js',
      Main:'Main.jsx',
      TodoApp:'TodoApp.jsx',
      TodoList:'TodoList.jsx',
      Todo:'Todo.jsx',
      AddTodo:'AddTodo.jsx',
      SearchTodo:'SearchTodo.jsx',
      TodoAPI:'TodoAPI.jsx',
      applicationStyles:'app.css',
      actions:'app/actions/actions.jsx',
      reducers:'app/reducers/reducers.jsx',
      configureStore:'app/store/configureStore.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015','stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  }
}
