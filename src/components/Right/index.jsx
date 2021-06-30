/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Right.scss";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import imageRight1 from "../../assets/images/right1.png"; // Tell webpack this JS file uses this image
import imageRight2 from "../../assets/images/right2.png"; // Tell webpack this JS file uses this image
import imageRight3 from "../../assets/images/right3.png"; // Tell webpack this JS file uses this image
import imageRight4 from "../../assets/images/right4.png"; // Tell webpack this JS file uses this image

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
function Right() {
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
    <div style={{ marginLeft: 1050, marginTop: -100 }}>
      <MyButton
        font="Comic Sans MS"
        style={{ width: 72, height: 70 }}
        imageBG={imageRight1}
        // text={"huuanh1987"}
        styleText={{ marginTop: -25, color: "white" }}
        // onClick={onClickABC("sdsdsd")}
      />
      <MyButton
        font="Comic Sans MS"
        style={{ width: 72, height: 70, marginLeft: 30 }}
        imageBG={imageRight2}
        // text={"huuanh1987"}
        styleText={{ marginTop: -25, color: "white" }}
        // onClick={onClickABC("sdsdsd")}
      />
      <div style={{ marginTop: 30 }}>
        <MyButton
          style={{ width: 70, height: 72 }}
          imageBG={imageRight3}
          styleText={{ marginTop: -25, color: "white" }}
        />
        <MyButton
          font="Comic Sans MS"
          style={{ width: 72, height: 70, marginLeft: 30 }}
          imageBG={imageRight4}
          // text={"huuanh1987"}
          styleText={{ marginTop: -25, color: "white" }}
          // onClick={onClickABC("sdsdsd")}
        />
      </div>
    </div>
  );
}

export default Right;
