/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Header.scss";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import imageLeft1 from "../../../assets/images/left1.png"; // Tell webpack this JS file uses this image
import imageTop1 from "../../../assets/images/top1.png"; // Tell webpack this JS file uses this image
import imageTop2 from "../../../assets/images/top2.png"; // Tell webpack this JS file uses this image
import imageTop3 from "../../../assets/images/top3.png"; // Tell webpack this JS file uses this image
import imageTop4 from "../../../assets/images/top4.png"; // Tell webpack this JS file uses this image
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
function Header(props) {
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
    <div className=".bgHeader">
      <MyButton
        font="Comic Sans MS"
        style={{ width: 271, height: 52 }}
        imageBG={imageLeft1}
        text={props?.username}
        styleText={{ marginTop: -25, color: "red" }}
        // onClick={onClickABC("sdsdsd")}
      />
      <MyButton
        style={{ width: 156, height: 40, marginLeft: 452, marginTop: 15 }}
        imageBG={imageTop1}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 181, height: 37, marginTop: 10 }}
        imageBG={imageTop2}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 149, height: 38, marginTop: 13 }}
        imageBG={imageTop3}
        styleText={{ marginTop: -25, color: "white" }}
      />
      <MyButton
        style={{ width: 71, height: 61 }}
        imageBG={imageTop4}
        styleText={{ marginTop: -25, color: "white" }}
      />
    </div>
  );
}

export default Header;
