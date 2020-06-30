// show https://github.com/arackaf/customize-cra
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.join(__dirname, "", "src"),
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  })
);
