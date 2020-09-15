import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button";
import Alert, { AlertType } from "./components/Alert";
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
      </header>
    </div>
  );
}

export default App;
