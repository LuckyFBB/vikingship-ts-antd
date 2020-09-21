import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button";
import Alert, { AlertType } from "./components/Alert";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>disabled</Button>
        <Button size={ButtonSize.Small}>small button</Button>
        <Button btnType={ButtonType.Default} autoFocus>
          default button
        </Button>
        <Button btnType={ButtonType.Danger}>danger button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          large button
        </Button>
        <Button btnType={ButtonType.Link} href="http://baidu.com" autoFocus>
          Baidu Link
        </Button>
        <Button btnType={ButtonType.Link} disabled href="http://baidu.com">
          Baidu Link
        </Button>
        <br />
        <br />
        <Alert title="Alert" desc="Alert info" alertType={AlertType.Success} />
        <br />
        <Menu mode="vertical" defaultOpenSubMenus={["3"]}>
          <MenuItem>Hei</MenuItem>
          <MenuItem disabled>FBB</MenuItem>
          <MenuItem>LuckyFBB</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown</MenuItem>
            <MenuItem>dropdown1</MenuItem>
          </SubMenu>
          <MenuItem>Lucky</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
