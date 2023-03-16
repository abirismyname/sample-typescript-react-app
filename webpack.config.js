 const path = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');

   module.exports = {
     entry: path.resolve(__dirname, 'client', 'src', 'index.tsx'),

     output: {
       path: path.resolve(__dirname, 'dist', 'public'),
       filename: 'bundle.js',
     },

     resolve: {
       extensions: ['.tsx', '.ts', '.js', '.jsx'],
     },

     module: {
       rules: [
         {
           test: /\.(js|jsx|ts|tsx)$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
             options: {
               presets: ['@babel/preset-env', '@babel/preset-react'],
             },
           },
         },
       ],
     },

     plugins: [
       new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'client', 'public', 'index.html'),
         favicon: path.resolve(__dirname, 'client', 'public', 'favicon.ico'),
       }),
     ],
   };
