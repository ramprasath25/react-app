var path = require('path');

module.exports = {
    //Entry point
    entry: path.resolve(__dirname, 'src') + '/index.js',
    //Output point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        //Webpacks 2x use rules instead of loaders
        rules: [{
            test: /\.js$/,
            exclude: /{node_modules}/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
              test: /\.(png|jpg)$/, 
              loader: 'url-loader?limit=8192'
        }]
    }
};