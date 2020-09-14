import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disanled>disabled</Button>
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
        <Button btnType={ButtonType.Link} disanled href="http://baidu.com">
          Baidu Link
        </Button>
      </header>
    </div>
  );
}

export default App;
