/*
 * @Author: FBB
 * @Date: 2020-09-23 13:18:11
 * @LastEditors: FBB
 * @LastEditTime: 2020-09-23 15:35:53
 * @Description:
 */
import React from "react";
import { withInfo } from "@storybook/addon-info";
import "../src/styles/index.scss";
import { addDecorator, addParameters } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
  width: "100%",
};
const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
);
addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({
  info: {
    inline: true,
    header: false,
  },
});
