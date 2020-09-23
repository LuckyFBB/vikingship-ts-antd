import React from "react";

import { storiesOf } from "@storybook/react";
import Tabs from "./index";
import TabItem from "./TabItem";
import Icon from "../Icon";

const defaultTabs = () => (
  <Tabs>
    <TabItem label="选项卡一">this is content one</TabItem>
    <TabItem label="选项卡二" disabled>
      this is content two
    </TabItem>
    <TabItem label="选项卡三">this is content three</TabItem>
  </Tabs>
);

const modeTabs = () => (
  <Tabs mode="vertical">
    <TabItem label="选项卡一">this is content one</TabItem>
    <TabItem label="选项卡二">this is content two</TabItem>
    <TabItem label="选项卡三">this is content three</TabItem>
  </Tabs>
);

const typeTabs = () => (
  <Tabs type="card">
    <TabItem label="选项卡一">this is content one</TabItem>
    <TabItem label="选项卡二">this is content two</TabItem>
    <TabItem label="选项卡三">this is content three</TabItem>
  </Tabs>
);
const iconTabs = () => (
  <Tabs type="card">
    <TabItem label="选项卡一">this is content one</TabItem>
    <TabItem
      label={
        <>
          <Icon icon="exclamation-circle" />
          {"  "}自定义图标
        </>
      }
    >
      this is content two
    </TabItem>
    <TabItem label="选项卡三">this is content three</TabItem>
  </Tabs>
);

storiesOf("Tabs Component", module)
  .add("基础的Tabs", defaultTabs)
  .add("不同方向的tabs", modeTabs)
  .add("不同类型的Tabs", typeTabs)
  .add("自定义图标的Tabs", iconTabs);
