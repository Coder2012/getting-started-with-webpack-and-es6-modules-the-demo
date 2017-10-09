module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        use: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};
