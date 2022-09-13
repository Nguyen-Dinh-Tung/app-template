// const path = require('path');
// const webpack = require('webpack');

// require('dotenv').config({ path: './.env' });

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// module.exports = (env, argv) => {
//   return {
//     mode: argv.mode,

//     entry: './src/index.tsx',

//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       chunkFilename: '[name].[contenthash].js',
//       filename: '[name].[contenthash].js',
//       publicPath: '/',
//     },

//     module: {
//       rules: [
//         {
//           test: /\.(ts|tsx|js)$/,
//           use: [
//             { loader: 'babel-loader' },
//             {
//               loader: 'ts-loader',
//               options: {
//                 transpileOnly: true,
//               },
//             },
//           ],
//           include: path.resolve(__dirname, 'src'),
//           exclude: /node_modules/,
//         },
//         {
//           test: /\.css$/,
//           use: ['style-loader', 'css-loader'],
//         },
//         { test: /\.(jpg|png)$/, loader: 'file-loader' },
//         {
//           test: /\.svg$/,
//           use: ['@svgr/webpack', 'url-loader'],
//         },
//       ],
//     },

//     optimization: {
//       splitChunks: {
//         chunks: 'all',
//       },
//       runtimeChunk: 'single',
//       removeAvailableModules: true,
//     },

//     plugins: [
//       new HtmlWebpackPlugin({
//         hash: true,
//         template: './public/index.html',
//         favicon: './public/favicon.ico',
//       }),
//       new webpack.IgnorePlugin({
//         resourceRegExp: /^\.\/locale$/,
//         contextRegExp: /moment$/,
//       }),
//       new webpack.DefinePlugin({
//         'process.env': JSON.stringify(process.env),
//       }),
//       new BundleAnalyzerPlugin(),
//     ],

//     devServer: {
//       static: {
//         directory: path.join(__dirname, 'public'),
//       },
//       compress: true,
//       port: 'auto',
//       open: true,
//       historyApiFallback: true,
//     },
//     devTool: 'inline-source-map',

//     resolve: {
//       alias: {
//         App: path.resolve('src/App/'),
//         Apply: path.resolve('src/Apply/'),
//         Auth: path.resolve('src/Auth/'),
//         FormInformation: path.resolve('src/FormInformation/'),
//         pages: path.resolve('src/pages/'),
//         shared: path.resolve('src/shared/'),
//         browserHistory: path.resolve('src/browserHistory'),
//       },
//       extensions: ['.ts', '.tsx', '.js'],
//     },
//   };
// };
