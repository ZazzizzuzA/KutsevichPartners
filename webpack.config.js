const path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    EncodingPlugin = require('webpack-encoding-plugin');
    VueLoaderPlugin = require('vue-loader/lib/plugin');
    // MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        pathinfo: false
    },
    resolve: {
        extensions: [".js", ".json", ".scss", ".css", ".vue"],
        alias: {
            fonts: path.join(__dirname, "assets", "fonts"),
            'vue$': 'vue/dist/vue.min.js',
            components: path.join(__dirname, "src", "components")
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
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                {
                    loader: "url-loader",
                    options: {
                        emitFile: false,
                        name: '[path][name].[ext]',
                        limit: 8000,
                    }
                }
            ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 1123,
        historyApiFallback: true
    },
    mode: 'production',
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
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            // $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new EncodingPlugin({
            encoding: 'utf8'
        })
    ],
    
}