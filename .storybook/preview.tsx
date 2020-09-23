/*
 * @Author: FBB
 * @Date: 2020-09-23 13:18:11
 * @LastEditors: FBB
 * @LastEditTime: 2020-09-23 17:38:15
 * @Description:
 */
import React from "react";
import { withInfo } from "@storybook/addon-info";
import "../src/styles/index.scss";
import { addDecorator, addParameters } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
  width: "500px",
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
