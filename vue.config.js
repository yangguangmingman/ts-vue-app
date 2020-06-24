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
        }
      }
    });
  }
};
