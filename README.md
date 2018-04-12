   # Vue SSR v01   官方DEMO [api](https://github.com/vuejs/vue-hackernews-2.0)
    1, mkdir Vue-SSR-V01 
    2, cd Vue-SSR-V01
    3, npm init --yes
   ## 依赖包

   ### webpack
    npm i -D  webpack webpack-cli
    npm i -D  webpack-merge
    npm i -D  webpack-dev-middleware webpack-hot-middleware
    npm i -D  sw-precache-webpack-plugin
    npm i -D  html-webpack-plugin  extract-text-webpack-plugin clean-webpack-plugin  copy-webpack-plugin 
    npm i -D  optimize-css-assets-webpack-plugin webpack-parallel-uglify-plugin uglifyjs-webpack-plugin webpack-bundle-analyzer webpack-md5-hash webpack-dev-server

   ### vue

    npm i -S  vue vue-router vuex  vue-property-decorator vue-class-component vue-server-renderer vuex-router-sync
    npm i -D  vue-template-compiler vue-loader vue-style-loader
    
    npm i -D  babel-plugin-transform-vue-jsx  babel-helper-vue-jsx-merge-props babel-plugin-syntax-jsx

   ### babel
    npm i -D  babel-loader babel-core 
    npm i -D  babel-preset-env
    npm i -D  babel-runtime  babel-polyfill
    npm i -D  babel-plugin-transform-runtime 
    npm i -D  babel-plugin-transform-decorators-legacy babel-plugin-transform-decorators
    npm i -D  babel-plugin-add-module-exports babel-plugin-transform-class-properties
    npm i -D  babel-plugin-transform-object-rest-spread
    npm i -D  babel-register
   
   ### postcss
    npm i -D postcss-px2rem  autoprefixer


   ### node
    npm i -s cross-env  // cross-env NODE_ENV=development &&