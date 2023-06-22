const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: './dist'
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  }
}
