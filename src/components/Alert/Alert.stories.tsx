import React from "react";

import { storiesOf } from "@storybook/react";
import Alert from ".";

const defaultAlert = () => <Alert closable={true} title="this is alert!" />;

const typeAlert = () => (
  <>
    <Alert closable={true} title="this is alert!" type="default" />
    <Alert title="this is alert!" type="success" />
    <Alert closable={true} title="this is alert!" type="danger" />
    <Alert title="this is alert!" type="warning" />
  </>
);

const descAlert = () => (
  <Alert title="this is title" desc="this is desc" closable={true} />
);

storiesOf("Alert Component", module)
  .add("默认Alert", defaultAlert)
  .add("不同类型的Alert", typeAlert)
  .add("含有描述的Alert", descAlert);
