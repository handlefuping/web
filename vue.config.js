module.exports = {
  chainWebpack: config => {
        config.resolve.extensions
          .add('ts')
          .add('tsx');
          config.module.rule('ts').use('ts-loader')
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true 
        } 
      } 
    } 
  } 
}