module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Sveriges städer'
      return args
    })
  },
  pwa: {
    manifestOptions: {
      background_color: 'black'
    },
    name: 'Mitt projekt',
    themeColor: 'white',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://avancera.app/cities/'
        }
      ]
    }
  }
}