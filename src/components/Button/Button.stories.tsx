import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from ".";

const defaultButton = () => (
  <Button onClick={action("clicked")}>default Button</Button>
);

const buttonWithSize = () => (
  <>
    <Button size="sm">Small Button</Button>
    <Button size="md">Middle Button</Button>
    <Button size="lg">Large Button</Button>
  </>
);
const buttonWithType = () => (
  <>
    <Button btnType="primary">Primary Button</Button>
    <Button btnType="default">Default Button</Button>
    <Button btnType="danger">Danger Button</Button>
    <Button btnType="link" href="https://baidu.com">
      Link Button
    </Button>
  </>
);

storiesOf("Button Component", module)
  .add("默认Button", defaultButton)
  .add("不同大小的Button", buttonWithSize)
  .add("不同类型的Button", buttonWithType);
