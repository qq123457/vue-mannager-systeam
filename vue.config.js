const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  outputDir: "./build",
  configureWebpack: {
    resolve: {
      alias: {
        ["@components"]: "@/components"
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   };
  // }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", path.resolve(__dirname, "src"))
  //     .set("@components", "@/components");
  //   config.plugins
  //     .set(
  //       AutoImport({
  //         resolvers: [ElementPlusResolver()]
  //       })
  //     )
  //     .set(
  //       Components({
  //         resolvers: [ElementPlusResolver()]
  //       })
  //     );
  // }
});
