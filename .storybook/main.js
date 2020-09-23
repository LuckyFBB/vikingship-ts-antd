/*
 * @Author: FBB
 * @Date: 2020-09-23 13:18:11
 * @LastEditors: FBB
 * @LastEditTime: 2020-09-23 14:58:44
 * @Description:
 */
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
