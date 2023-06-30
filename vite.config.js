const path = require('path')

export default {
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  // CSS configuration
  css: {
    postcss: {
      // PostCSS plugins
    },
  },
}
