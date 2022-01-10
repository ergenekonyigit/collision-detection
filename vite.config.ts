const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        circle: resolve(__dirname, "circle/index.html"),
        rectangle: resolve(__dirname, "rectangle/index.html"),
      },
    },
  },
});
