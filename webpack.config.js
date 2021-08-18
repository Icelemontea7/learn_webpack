const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
//const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundld.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.(jpg|png|gif|jpeg)$/,
               type:"asset",
             parser: {
               dataUrlCondition: {
                 maxSize: 25 * 1024,
               }
             },
             generator:{
               filename:'img/[name].[hash:6][ext]',
               publicPath:'./'
             },
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      //{
      //  test: /\.js$/,
      //  exclude: /(node_modules|bower_components)/,
      //  use: {
      //    loader: 'babel-loader',
      //    options: {
      //      presets: ['@babel/preset-env']
      //    }
      //  }
      //}
     ///{
     ///  test:/\.vue$/,
     ///  use:['vue-loader']
     ///},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/one.html'//复制这个文件到打包的文件夹并引入所需要的资源
    }),
    //new VueLoaderPlugin(),
  ],
  mode: 'development',
  resolve:{//指定vue使用conpiler版本，runtime版本会出错（不能有template)
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}