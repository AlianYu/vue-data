/*
 * @Author: 余林倩
 * @Date: 2022-06-28 14:04:52
 * @LastEditors: 余林倩
 * @LastEditTime: 2022-06-28 16:55:22
 * @Description: 请填写该文件的用途
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true },
    ], // `style: true` 会加载 less 文件
  ],
};
