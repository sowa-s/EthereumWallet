const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

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
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
        ],
      },
      plugins: [
        new VueLoaderPlugin(),
        new HardSourceWebpackPlugin()
        //cache data from: node_modules/.cache/hard-sourc
      ],
      resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          vue$: 'vue/dist/vue.esm.js',
        },
      },
}