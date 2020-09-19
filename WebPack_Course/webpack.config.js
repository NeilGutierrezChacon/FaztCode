const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        path: __dirname + '/build',
        filename:'output.js'
    },
    devServer:{
        port:5000
    },
    module: {
        rules: [
          {
            test: /\.s[ca]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
          },
        ],
      },    
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'bundle.css',
        }),
    ]
}