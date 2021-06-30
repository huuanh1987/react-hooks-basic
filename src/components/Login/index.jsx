import React, { useState } from "react";
import "./Login.scss";
import Header from "../Header";
import Left from "../Left";
import Right from "../Right";
import Button from "../ButtonDB";

// ColorBox.propTypes = {};

function getRandomColor() {
  const colorList = ["deeppink", "green", "yellow", "red", "blue", "black"];
  const randomIndex = Math.trunc(Math.random() * 6);
  return colorList[randomIndex];
}

function Login() {
  return (
    <div className="app">
      <Header />
      <Left />
      <Right />
      <Button />
    </div>
  );
}

export default Login;
