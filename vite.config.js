const path = require('path')

export default {
  root: path.resolve(__dirname, './'),
  build: {
    outDir: './dist'
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  }
}
