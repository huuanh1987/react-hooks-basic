import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";

import "./ChooseActor.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Dinosaur1 from "../../assets/images/dinosaur/1.gif";
import Dinosaur2 from "../../assets/images/dinosaur/2.gif";
import Dinosaur3 from "../../assets/images/dinosaur/3.gif";
import Dinosaur4 from "../../assets/images/dinosaur/4.gif";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((abc) => ({
  root: {
    //   height: 200;
    // width: 200;
    background: (props) => props.color,
    backgroundImage: (props) => `url(${props?.imageBG})`,
    "&:hover": {
      background: (props) => props.hover,
    },
    // width: "100%",
    // height: "100%",
    scale: 0.2,
  },
  label: { fontFamily: (props) => props.font },
}));
function ChooseActor(props) {
  function MyButton(props) {
    const classes = useStyles(props);
    return (
      <Button
        className={classes.root}
        classes={{ label: classes.label }}
        style={props?.style}
        onClick={(text) => {
          props?.onClick(text);
        }}
      >
        <text style={props?.styleText}>{props?.text}</text>
      </Button>
    );
  }
  function onClickCallBack(actor) {
    console.warn(actor);
    const element = (
      <div>
        <Dashboard username={props?.username} actor={actor} />
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
          // alignItems: "center",
          // backgroundColor: "red",
          height: 300,
          padding: 30,
        }}
      >
        Chào mừng {props?.username} đến với game. Hãy chọn 1 nhân vật
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          // backgroundColor: "red",
          height: 100,
          padding: 30,
        }}
      >
        <img
          src={Dinosaur2}
          alt="loading..."
          style={{ width: "300", height: 300 }}
          onClick={() => {
            onClickCallBack("Dinosaur2");
          }}
        />
        <img
          src={Dinosaur3}
          alt="loading..."
          style={{ width: "300", height: 300 }}
          onClick={() => {
            onClickCallBack("Dinosaur3");
          }}
        />
        <img
          src={Dinosaur4}
          alt="loading..."
          style={{ width: "300", height: 300 }}
          onClick={() => {
            onClickCallBack("Dinosaur4");
          }}
        />
      </div>
    </div>
  );
}

export default ChooseActor;
