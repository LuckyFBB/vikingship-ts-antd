import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
import Tabs from "./components/Tabs";
import TabItem from "./components/Tabs/TabItem";
import Input from "./components/Input";

library.add(fas);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>disabled</Button>
        <Button size="sm">small button</Button>
        <Button btnType="default" autoFocus>
          default button
        </Button>
        <Button btnType="danger">danger button</Button>
        <Button btnType="primary" size="lg">
          large button
        </Button>
        <Button btnType="link" href="http://baidu.com" autoFocus>
          Baidu Link
        </Button>
        <Button btnType="link" disabled href="http://baidu.com">
          Baidu Link
        </Button>
        <br />
        <br />
        <Alert title="Alert" desc="Alert info" type="success" />
        <br />
        <Menu defaultOpenSubMenus={["3"]}>
          <MenuItem>Hei</MenuItem>
          <MenuItem disabled>FBB</MenuItem>
          <MenuItem>LuckyFBB</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown</MenuItem>
            <MenuItem>dropdown1</MenuItem>
          </SubMenu>
          <MenuItem>Lucky</MenuItem>
        </Menu>
        <br />
        <Tabs type="card" mode="vertical">
          <TabItem label={<div>yohu</div>}>111111111</TabItem>
          <TabItem label="card2" disabled>
            222222222
          </TabItem>
          <TabItem label="card3">333333333</TabItem>
          <TabItem label="card4">444444444</TabItem>
        </Tabs>
        <br />
        <Input type="text" placeholder="icon input" append=".com" />
      </header>
    </div>
  );
}

export default App;
