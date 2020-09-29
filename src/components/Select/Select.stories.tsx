import React from "react";

import { storiesOf } from "@storybook/react";
import Select from "./index";
import Option from "./Option";

const defaultSelect = () => (
  <>
    <Select defaultValue="111">
      <Option value="111"></Option>
      <Option value="222"></Option>
      <Option value="333"></Option>
      <Option value="44444"></Option>
      <Option value="55555"></Option>
      <Option value="666"></Option>
      <Option value="777777"></Option>
      <Option value="888"></Option>
      <Option value="99999"></Option>
      <Option value="000"></Option>
    </Select>
    <br />
    <Select defaultValue="111" disabled>
      <Option value="111"></Option>
      <Option value="222"></Option>
      <Option value="333"></Option>
      <Option value="44444"></Option>
      <Option value="55555"></Option>
      <Option value="666"></Option>
      <Option value="777777"></Option>
      <Option value="888"></Option>
      <Option value="99999"></Option>
      <Option value="000"></Option>
    </Select>
  </>
);
const multipleSelect = () => (
  <>
    <Select defaultValue="111" multiple>
      <Option value="111"></Option>
      <Option value="222"></Option>
      <Option value="333"></Option>
      <Option value="44444"></Option>
      <Option value="55555"></Option>
      <Option value="666"></Option>
      <Option value="777777"></Option>
      <Option value="888"></Option>
      <Option value="99999"></Option>
      <Option value="000"></Option>
    </Select>
    <br />
    <Select defaultValue={["111", "333", "666"]} disabled multiple>
      <Option value="111"></Option>
      <Option value="222"></Option>
      <Option value="333"></Option>
      <Option value="44444"></Option>
      <Option value="55555"></Option>
      <Option value="666"></Option>
      <Option value="777777"></Option>
      <Option value="888"></Option>
      <Option value="99999"></Option>
      <Option value="000"></Option>
    </Select>
  </>
);

storiesOf("Select Component", module)
  .add("默认Select", defaultSelect)
  .add("多选Select", multipleSelect);
