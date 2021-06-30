/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Left.scss";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import imageLeft2 from "../../assets/images/left2.png"; // Tell webpack this JS file uses this image
import imageLeft3 from "../../assets/images/left3.png"; // Tell webpack this JS file uses this image

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
function Left() {
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
    <div>
      <MyButton
        font="Comic Sans MS"
        style={{ width: 236, height: 88, marginTop: 30 }}
        imageBG={imageLeft2}
        // text={"huuanh1987"}
        styleText={{ marginTop: -25, color: "white" }}
        // onClick={onClickABC("sdsdsd")}
      />
      <div>
        <MyButton
          style={{ width: 341, height: 96, marginTop: 30 }}
          imageBG={imageLeft3}
          styleText={{ marginTop: -25, color: "white" }}
        />
      </div>
    </div>
  );
}

export default Left;
