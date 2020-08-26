const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourceFolder = path.resolve(__dirname, 'src');
const outputFolder = path.resolve(__dirname, "dist");

module.exports = function (env) {
    const isDevMode = env && env.isDevelopment;

    return {
        context: __dirname,
        mode: isDevMode ? 'development' : 'production',
        entry: [
            'react-hot-loader',
            path.resolve(sourceFolder, "bootstrap.tsx")
        ],
        devtool: 'source-map',
        devServer: {
            contentBase: outputFolder
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        },
        output: {
            path: outputFolder,
            filename: '[name].js',
        },
        target: 'web',
        module: {
            rules: [
                { test: /\.tsx?$/, loader: 'ts-loader' },
                { test: /\.css$/, loader: 'style-loader!css-loader' }
            ],
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false,
                cleanOnceBeforeBuildPatterns: [
                    '**/*', '!vendor-manifest.json', '!vendor.js'
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'static', to: outputFolder }
                ]
            }),
            new webpack.DllReferencePlugin({
                manifest: require(path.resolve(outputFolder, "vendor-manifest.json")),
                context: outputFolder
            })
        ]
    }
};
