const path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "index.js"),
        main: path.join(__dirname, "src/styles", "styles.scss")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        pathinfo: false
    },
    resolve: {
        extensions: [".js", ".json", ".scss", ".css"],
        alias: {
            fonts: path.join(__dirname, "assets", "fonts"),
        }
    },
    watch: true,
    module: {
        rules: [{
                test: /\.(sc|sa|c)ss$/,
                use: [
                    // loader для компиляции стилей в файл CSS для исходников
                    // MiniCssExtractPlugin.loader,

                    "style-loader",
                    'css-loader',
                    'postcss-loader',
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        emitFile: false,
                        name: '[path][name].[ext]',
                    }
                } 
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        emitFile: false,
                        name: '[path][name].[ext]',
                        limit: 8000,
                    }
                }  
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: "./index.html" }),
        new CopyWebpackPlugin([{ from: 'assets/**/*' }]),
        // new MiniCssExtractPlugin({
        //     filename: "./css/[name].css",
        //   }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ]
}