const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const path = require("path")

module.exports = merge(common, {
	mode: "production",
	devtool: false,
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "[name].[contenthash].js",
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[name]-[contenthash]-[id].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
							sourceMap: false,
						},
					},
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserWebpackPlugin({
				extractComments: false,
			}),
			new CssMinimizerWebpackPlugin(),
		],
		runtimeChunk: {
			name: "runtime",
		},
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
})