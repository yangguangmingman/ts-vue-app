const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  configureWebpack: config => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        alias: {
          "@": resolve("./src"),
        },
      },
    });
  },
  devServer: {
    // development server port 8000
    port: 8000,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      "/cms": {
        target: "http://testsbc2cms.hulianjun.com/",
        ws: false,
        changeOrigin: true,
      },
    },
  },
};
