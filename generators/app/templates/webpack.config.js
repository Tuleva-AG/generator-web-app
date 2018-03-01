const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: [
        "whatwg-fetch", // Use fetch polyfill, since IE11 does not support it yet http://caniuse.com/#feat=fetch
        "es6-promise/auto", // need the es6-promises for the IE11, see http://caniuse.com/#feat=promises
        "./src/index.tsx"
    ],
    output: {
        filename: "helloworld.js",
        path: path.join(__dirname, "dist")
    },
    devServer: {},

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by
            // 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }, {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }, {
                test: /\.tsx?$/,
                enforce: "pre",
                loader: "tslint-loader"
            }, {
                test: /\.(ttf|eot|svg|woff)(\?v=.+)?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: require("html-webpack-template"), appMountId: "app", title: "HelloWorldApp"})]
};

