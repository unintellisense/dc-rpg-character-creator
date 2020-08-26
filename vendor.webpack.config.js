var path = require('path');
var webpack = require('webpack');

const outputFolder = path.resolve(__dirname, "dist");

module.exports = function (env) {
    const isDevMode = !env || !env.production;
    if (isDevMode) console.log('building dev vendor bundle...');
    return {
        mode: isDevMode ? 'development' : 'production',
        entry: {
            "vendor": ["react", "react-dom", "@material-ui/core", "@material-ui/icons"]
        },
        output: {
            path: outputFolder,
            filename: "[name].js",
            library: "[name]_dll"
        },
        plugins: [
            new webpack.DllPlugin({
                path: path.join(outputFolder, "vendor-manifest.json"),
                name: "[name]_dll",
                context: ".dist"
            })
        ]
    }
};