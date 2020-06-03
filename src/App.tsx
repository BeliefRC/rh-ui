import React from "react";
import Button from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button
        autoFocus
        onClick={() => {
          alert(23);
        }}
      >
        Hello
      </Button>
      <Button disabled className="ds">
        Hello dis
      </Button>
      <Button btnType="primary" size="lg">
        Hello2
      </Button>
      <Button btnType="link" size="lg" href="https://www.baidu.com">
        Baidu Link
      </Button>
      <Button disabled btnType="link" size="lg" href="https://www.baidu.com">
        Baidu Link
      </Button>
    </div>
  );
}

export default App;
