const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        filename: 'bundle.js',        
        path: path.resolve(__dirname, 'public/js')        
    },
    mode: "development",
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
};