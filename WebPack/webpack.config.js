const CopyPlugin = require('copy-webpack-plugin');
const Assets = require('./assets.js');
const path = require ('path');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyPlugin({
            patterns: Assets.map(asset =>{
                return {
                    from: path.join(__dirname,`./node_modules/${asset}`),
                    to: path.resolve(__dirname,`libs`)
                }
            })
        })
    ]
}