import React from "react";

import { storiesOf } from "@storybook/react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const defaultMenu = () => (
  <Menu>
    <MenuItem>link 1</MenuItem>
    <MenuItem>link 2</MenuItem>
    <SubMenu title="下拉列表">
      <MenuItem>droplink 1</MenuItem>
      <MenuItem>droplink 2</MenuItem>
    </SubMenu>
  </Menu>
);

const modeMenu = () => (
  <Menu mode="vertical">
    <MenuItem>link 1</MenuItem>
    <MenuItem>link 2</MenuItem>
    <SubMenu title="下拉列表">
      <MenuItem>droplink 1</MenuItem>
      <MenuItem>droplink 2</MenuItem>
    </SubMenu>
  </Menu>
);
const dropMenu = () => (
  <Menu mode="vertical" defaultIndex="2-0" defaultOpenSubMenus={["2"]}>
    <MenuItem>link 1</MenuItem>
    <MenuItem>link 2</MenuItem>
    <SubMenu title="下拉列表">
      <MenuItem>droplink 1</MenuItem>
      <MenuItem>droplink 2</MenuItem>
    </SubMenu>
  </Menu>
);

storiesOf("Menu Component", module)
  .add("默认Menu", defaultMenu)
  .add("不同类型的Menu", modeMenu)
  .add("默认展开的Menu", dropMenu);
