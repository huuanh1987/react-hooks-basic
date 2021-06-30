/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Bottom.scss";
import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import imageBottom1 from "../../assets/images/Bottom1.png";
import imageBottom2 from "../../assets/images/Bottom2.png";
import imageBottom3 from "../../assets/images/Bottom3.png";
import imageBottom4 from "../../assets/images/Bottom4.png";
import imageBottom5 from "../../assets/images/Bottom5.png";
import imageBottom6 from "../../assets/images/button6.png";
import Login from "../Login";
const useStyles = makeStyles((abc) => ({
  root: {
    background: (props) => props.color,
    backgroundImage: (props) => `url(${props?.imageBG})`,
    "&:hover": {
      background: (props) => props.hover,
    },
  },
  label: { fontFamily: (props) => props.font },
}));
function Bottom() {
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
  function onClickCallBack(text) {
    const element = (
      <div>
        <Login />
      </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
  }

  return (
    <div style={{ marginTop: 230 }}>
      <MyButton
        font="Comic Sans MS"
        style={{ width: 120, height: 105, marginLeft: 10 }}
        imageBG={imageBottom1}
        styleText={{ marginTop: -25, color: "white" }}
        // onClick={onClickABC("sdsdsd")}
      />
      <MyButton
        style={{ width: 120, height: 105, marginLeft: 10 }}
        imageBG={imageBottom2}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 120, height: 105, marginLeft: 10 }}
        imageBG={imageBottom3}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 120, height: 105, marginLeft: 10 }}
        imageBG={imageBottom4}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 222, height: 107, marginLeft: 300 }}
        imageBG={imageBottom5}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 222, height: 107, marginLeft: 10 }}
        imageBG={imageBottom6}
        styleText={{ marginTop: -25, color: "white" }}
        onClick={() => {
          onClickCallBack();
        }}
      />
    </div>
  );
}

export default Bottom;
