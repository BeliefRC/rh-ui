import React from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <div className="App">
      <div style={{ margin: 100 }}>
        <Alert
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"
        />
        <Alert
          closable
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="default"
        />
        <Alert
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
        />
        <Alert
          message="Error Text"
          closable
          description="Error Description Error Description Error Description Error Description"
          type="danger"
        />
      </div>
      <Menu
        mode={"horizontal"}
        defaultOpenSubMenus={["5"]}
        onSelect={(index) => console.log(index)}
      >
        <MenuItem index={"213"}>Link 1</MenuItem>
        <MenuItem disabled>Link 2</MenuItem>
        <MenuItem>Link 3</MenuItem>
        <SubMenu title={"sub"}>
          <MenuItem>Link 4</MenuItem>
          <MenuItem disabled>Link 5</MenuItem>
          <MenuItem>Link 6</MenuItem>
        </SubMenu>
        <MenuItem>Link 7</MenuItem>
        <SubMenu key="2222" title={"sub2"}>
          <MenuItem>Link 8</MenuItem>
          <MenuItem disabled>Link 9</MenuItem>
          <MenuItem>Link 10</MenuItem>
        </SubMenu>
      </Menu>
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
