import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Buuton/button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disanled>Hello world</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Hello world
        </Button>
        <Button btnType={ButtonType.Link} href="http://baidu.com">
          Baidu Link
        </Button>
      </header>
    </div>
  );
}

export default App;
