/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Button.scss";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import imageButton1 from "../../assets/images/button1.png";
import imageButton2 from "../../assets/images/button2.png";
import imageButton3 from "../../assets/images/button3.png";
import imageButton4 from "../../assets/images/button4.png";
import imageButton5 from "../../assets/images/button5.png";
import imageButton6 from "../../assets/images/button6.png";
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
function ButtonDB() {
  function MyButton(props) {
    const classes = useStyles(props);
    return (
      <Button
        className={classes.root}
        classes={{ label: classes.label }}
        style={props?.style}
        // onClick={(text) => {
        //   props?.onClick(text);
        // }}
      >
        <text style={props?.styleText}>{props?.text}</text>
      </Button>
    );
  }

  // function onClickABC(text) {
  //   alert("clicked " + text);
  // }

  return (
    <div style={{ marginTop: 230 }}>
      <MyButton
        font="Comic Sans MS"
        style={{ width: 120, height: 105, marginLeft: 10 }}
        imageBG={imageButton1}
        styleText={{ marginTop: -25, color: "white" }}
        // onClick={onClickABC("sdsdsd")}
      />
      <MyButton
        style={{ width: 120, height: 105, marginLeft: 10 }}
        imageBG={imageButton2}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 120, height: 105, marginLeft: 10 }}
        imageBG={imageButton3}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 120, height: 105, marginLeft: 10 }}
        imageBG={imageButton4}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 222, height: 107, marginLeft: 300 }}
        imageBG={imageButton5}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 222, height: 107, marginLeft: 10 }}
        imageBG={imageButton6}
        styleText={{ marginTop: -25, color: "white" }}
      />
    </div>
  );
}

export default ButtonDB;
