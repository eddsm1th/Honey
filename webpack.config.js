
const 	workingStatic = true;

		path = require('path'),
		MiniCssExtractPlugin = require("mini-css-extract-plugin"),
		OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
		TerserPlugin = require('terser-webpack-plugin'),

		outputPath = './static-build/assets/dist/js';
		devMode = process.env.NODE_ENV !== 'production';

module.exports = {

	entry: {
		main: ['./static-build/assets/src/js/index.js', './static-build/assets/src/scss/main.scss']
	},

	output: {
		path: path.resolve(__dirname, outputPath),
		filename: 'main.js',
		publicPath: '/'
	},

	optimization: {
		minimizer: devMode ? [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		] : []
	},

	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['babel-preset-env']
					}
				}
			},

			{
		        test: /\.(sa|sc|c)ss$/,
		        use: [
			        {
			        	loader: MiniCssExtractPlugin.loader
			        },
			        {
			        	loader: 'css-loader', options: {
		                    sourceMap: true,
		                    url: false
		                }
			        },
			        {
			        	loader: 'postcss-loader', options: {
		                    sourceMap: true
		                }
			        },
		          	{
			        	loader: 'sass-loader', options: {
		                    sourceMap: true
		                }
			        }
		        ],
		      }
		]
	},

	plugins: [
	    new MiniCssExtractPlugin({
	    	filename: devMode ? '../css/[name].css' : '../css/[name].[hash].css',
	    	chunkFilename: devMode ? '../css/[id].css' : '../css/[id].[hash].css',
	    })
	],
};
