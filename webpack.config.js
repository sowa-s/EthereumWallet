const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dest`,
    },
    devServer: {
        contentBase: 'dest',
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
          },
          {
            test: /\.js$/,
            loader: 'babel-loader?presets=es2015',
          },
          {
            test: /\.css$/,
            loader: 'css-loader',
          },
        ],
      },
      plugins: [
        new VueLoaderPlugin()
      ],
      resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          vue$: 'vue/dist/vue.esm.js',
        },
      },
}