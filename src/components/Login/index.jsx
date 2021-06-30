import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dashboard from "../Dashboard";

import "./Login.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login() {
  const [useName, setUserName] = useState(() => {
    const initColor = localStorage.getItem("userName") || "";
    console.log(initColor);
    return initColor;
  });
  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  function handleBoxClick() {
    // alert("Chào mừng " + useName);
    // ReactDOM.render(document.getElementById("root"));
    tick();
  }
  function tick() {
    const element = (
      <div>
        <Dashboard />
      </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
  }
  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "red",
          height: 300,
          padding: 30,
        }}
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Username"
            defaultValue="Hello World"
            value={useName}
            onChange={handleChange}
          />
        </div>
        <Button
          disabled={useName.length === 0}
          variant="contained"
          color="primary"
          style={{ marginLeft: 30 }}
          onClick={() => {
            handleBoxClick();
          }}
        >
          PlayGame
        </Button>
      </div>
    </div>
  );
}

export default Login;
