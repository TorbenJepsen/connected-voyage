const webpack = require("webpack")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		historyApiFallback: {
			index: "/"
		},
		contentBase: path.resolve(__dirname, "dist"),
		compress: true,
		hot: true,
		port: 8080,
		proxy: {
			"/": {
				changeOrigin: true,
				target: "http://svc.metrotransit.org/NexTripv2/",
			}
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
})