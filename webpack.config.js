const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        cards: './pages/cards/cards.js',
        colorsType: './pages/colors-type/colors-type.js',
        formElements: './pages/form-elements/form-elements.js',
        headersFooters: './pages/headers-footers/headers-footers.js'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'docs/scripts/')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                exclude: /src\/fonts/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../images/'
                    }
                }]
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                include: /src\/fonts/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../fonts/'
                    }
                }]
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          }),
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin({
            template: './pages/cards/cards.pug',
            chunks: ['cards'],
            filename: path.resolve(__dirname, 'docs/cards.html'),
            minify: isProd
        }),
        new HTMLWebpackPlugin({
            template: './pages/colors-type/colors-type.pug',
            chunks: ['colorsType'],
            filename: path.resolve(__dirname, 'docs/colors-type.html'),
            minify: isProd
        }),
        new HTMLWebpackPlugin({
            template: './pages/form-elements/form-elements.pug',
            chunks: ['formElements'],
            filename: path.resolve(__dirname, 'docs/form-elements.html'),
            minify: isProd
        }),
        new HTMLWebpackPlugin({
            template: './pages/headers-footers/headers-footers.pug',
            chunks: ['headersFooters'],
            filename: path.resolve(__dirname, 'docs/headers-footers.html'),
            minify: isProd
        })
    ]
}
if (isProd) {
    module.exports.plugins.push(new CleanWebpackPlugin())
}
