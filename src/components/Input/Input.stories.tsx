import React from "react";

import { storiesOf } from "@storybook/react";

import Input from "./index";
import { action } from "@storybook/addon-actions";

const defaultInput = () => <Input type="text" placeholder="default input" />;
const disabledInput = () => (
  <>
    <Input type="text" placeholder="disabled input" disabled />
    <Input type="text" placeholder="readonly input" readOnly />
  </>
);
const iconInput = () => (
  <Input
    type="text"
    placeholder="icon input"
    icon="search"
    onChange={action("onChange")}
  />
);
const appendInput = () => (
  <Input
    type="text"
    placeholder="icon input"
    prepend="https://"
    append=".com"
    value={1111111}
    autoFocus
  />
);

storiesOf("Input Component", module)
  .add("普通的Input", defaultInput)
  .add("禁用和只读的Input", disabledInput)
  .add("带图标的Input", iconInput)
  .add("带前缀和后缀的Input", appendInput);
