import logo from './logo.svg';
import './App.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Button from "@mui/material/Button";
import MenuAppBar from './Appbar';

function App() {
  return (
    <div className="App">
      <MenuAppBar/>
      <Button variant="contained">Hello World</Button>
    </div>
  )
  ;
}

export default App;
