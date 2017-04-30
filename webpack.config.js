var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname,
		filename: "bundel.js"
	},
	devServer: {
		port: 9000
	},
	module: {
		rules: [
			{test: /\.js?$/, use: 'babel-loader'},
			{test: /\.css?$/, use: ExtractTextPlugin.extract('css-loader')},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader'},
            {test: /\.(woff|woff2)$/, use: 'url-loader'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader'}
		]
	},
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};