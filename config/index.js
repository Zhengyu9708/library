'use strict'
// Template version: 1.2.5
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // // 反向代理（测试环境）
    // proxyTable: {
    //   // java api
    //   '/yihao01-security-center/v2/portal': {
    //     target: 'http://192.168.0.234',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   // python api
    //   '/yihao01-security-center/v2/alarm/': {
    //     target: 'http://192.168.0.234',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   '/yihao01-security-center/v2/monitor': {
    //     target: 'http://192.168.0.234',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   '/yihao01-security-center/v2/alarm_events_today': {
    //     target: 'http://192.168.0.234',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   '/yihao01-security-center/v2/alarm_count_analysis_compare': {
    //     target: 'http://192.168.0.234',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   '/yihao01-security-center/v2/img_search': {
    //     target: 'https://security.0easy.com',
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {'^/yihao01-security-center/v2/img_search': '/img_search'}
    //   },
    //   '/yihao01-security-center/v2/safe_query': {
    //     target: 'http://192.168.0.234',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   '/yihao01-security-center/v2/safe_modify': {
    //     target: 'http://192.168.0.234',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   '/yihao01-security-center/v2/safe_delete': {
    //     target: 'http://192.168.0.234',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   '/yihao01-security-center/v2/safe_fetch': {
    //     target: 'http://192.168.0.234',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   // 静态文件目录
    //   '/yihao01-security-center/v2/static': {
    //     target: 'http://localhost:8082',
    //     pathRewrite: {'^/yihao01-security-center/v2/static': '/static'}
    //   },
    //   // image api
    //   '/yihao01-security-center/v2/zimg/**': {
    //     target: 'https://security.0easy.com',
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {'^/yihao01-security-center/v2/zimg': '/img'}
    //   },
    //   '/yihao01-security-center/v2/qimg/**_**': {
    //     target: 'https://qimg.0easy.com',
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {'^/yihao01-security-center/v2/qimg': ''}
    //   },
    //   '/yihao01-security-center/v2/image/upload': {
    //     target: 'https://security.0easy.com',
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {'^/yihao01-security-center/v2/image/upload': '/image/upload'}
    //   },
    //   // video api
    //   '/yihao01-security-center/v2/video/**': {
    //     target: 'http://video.0easy.com',
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {'^/yihao01-security-center/v2/video': ''}
    //   },
    //   '/streaming/examples/bipbop_4x3/gear2/**': {
    //     target: 'http://devimages.apple.com.edgekey.net',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   // gis api
    //   '/yihao01-security-center/v2/gis3d': {
    //     target: 'https://security.0easy.com',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   '/yihao01-security-center/v2/unitmap': {
    //     target: 'https://security.0easy.com',
    //     secure: false,
    //     changeOrigin: true
    //   },
    //   // mqtt api
    //   '/yihao01-security-center/v2/mqtt': {
    //     target: 'ws://192.168.0.234',
    //     ws: true,
    //     secure: false,
    //     changeOrigin: true
    //   }
    // },
    // 反向代理（生产环境）
    proxyTable: {
      // java api
      '/yihao01-bigdata-portal/': {
        // target: 'https://security.0easy.com',
        // target: 'ws://192.168.0.234',
        // http://192.168.0.65:3005/yihao01-bigdata-portal/
        target: 'http://192.168.0.65:3005',
        secure: false,
        changeOrigin: true
      },
      // python api
      // '/yihao01-security-control/alarm': {
      //   target: 'http://192.168.0.65',
      //   secure: false,
      //   changeOrigin: true
      // },
      '/yihao01-security-control': {
        target: 'http://192.168.0.65',
        secure: false,
        changeOrigin: true
      },
      // 趋势走向分析
      // '/yihao01-security-control/alarm_count_analysis_compare': {
      //   target: 'http://192.168.0.65',
      //   secure: false,
      //   changeOrigin: true
      // },
      // // 获取今日小区告警数量
      // '/yihao01-security-control/alarm_events_today': {
      //   target: 'http://192.168.0.65',
      //   secure: false,
      //   changeOrigin: true
      // },
      // 更多链接
      '/yihao01-bigdata-portal/sys/': {
        target: 'http://192.168.0.65:8080',
        secure: false,
        changeOrigin: true
      },
       // 周界设备记录
       '/yihao01-bigdata-portal/border/': {
        target: 'http://192.168.0.65:8080',
        secure: false,
        changeOrigin: true
      },
      '/yihao01-security-center/v2/monitor': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true
      },
      '/yihao01-security-center/v2/alarm_events_today': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true
      },
      '/yihao01-security-center/v2/alarm_count_analysis_compare': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true
      },
      '/yihao01-security-center/v2/img_search': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/yihao01-security-center/v2/img_search': '/img_search'}
      },
      '/yihao01-security-center/v2/safe_query': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true
      },
      '/yihao01-security-center/v2/safe_modify': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true
      },
      '/yihao01-security-center/v2/safe_delete': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true
      },
      '/yihao01-security-center/v2/safe_fetch': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true
      },
      // 静态文件路径
      '/yihao01-security-center/v2/static': {
        target: 'http://localhost:8082',
        pathRewrite: {'^/yihao01-security-center/v2/static': '/static'}
      },
      // image api
      '/yihao01-security-center/v2/zimg/**': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/yihao01-security-center/v2/zimg': '/img'}
      },
      '/yihao01-security-center/v2/qimg/**_**': {
        target: 'https://qimg.0easy.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/yihao01-security-center/v2/qimg': ''}
      },
      '/yihao01-security-center/v2/image/upload': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/yihao01-security-center/v2/image/upload': '/image/upload'}
      },
      // video api
      '/yihao01-security-center/v2/video/**': {
        target: 'http://video.0easy.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/yihao01-security-center/v2/video': ''}
      },
      // gis api
      '/yihao01-security-center/v2/gis3d': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true
      },
      '/yihao01-security-center/v2/unitmap': {
        target: 'https://security.0easy.com',
        secure: false,
        changeOrigin: true
      },
      // mqtt api
      '/yihao01-security-center/v2/mqtt': {
        target: 'wss://security.0easy.com',
        ws: true,
        secure: false,
        changeOrigin: true
      }
    },
    // 配置SSL
    https: true,

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8082, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },

  build: {
    // // Template for index.html
    // index: path.resolve(__dirname, '../dist/index.html'),
    // // Paths
    // assetsRoot: path.resolve(__dirname, '../dist'),
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',

    index: path.resolve(__dirname, '../dist/yihao01-security-center/v2/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/yihao01-security-center/v2'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/yihao01-security-center/v2/',

    /**
     * Source Maps
     */
    // 生产环境下关闭SourceMap
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 生产环境下开启gzip压缩
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
