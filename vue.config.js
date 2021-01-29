module.exports = {
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