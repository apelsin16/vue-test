// const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/styles.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-test/dist/'
      : '/'
};
