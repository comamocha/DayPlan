var config = {
   entry: './Client/app.js',
	
   output: {
      path:'./Client/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080,
      contentBase: "./Client",
      hot: true

   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
