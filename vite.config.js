const path = require('path')
export default {
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: '/',
  },
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'src/index.html'),
        about: path.resolve(__dirname, 'src/about.html'),
        menu: path.resolve(__dirname, 'src/menu.html'),
        coffee: path.resolve(__dirname, 'src/coffee.html'),
        login: path.resolve(__dirname, 'src/login.html'),
        register: path.resolve(__dirname, 'src/register.html'),
        // ...
        // List all files you want in your build
      }
    }
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  css: {
    scss: {
    },
  },
}
