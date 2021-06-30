/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Center.scss";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dinosaur1 from "../../../assets/images/dinosaur/1.gif";
import Dinosaur2 from "../../../assets/images/dinosaur/2.gif";
import Dinosaur3 from "../../../assets/images/dinosaur/3.gif";
import Dinosaur4 from "../../../assets/images/dinosaur/4.gif";

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
function Center(props) {
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
    <div style={{ marginLeft: 460, marginTop: -450 }}>
      <img
        src={
          props.actor === "Dinosaur2"
            ? Dinosaur2
            : props.actor === "Dinosaur3"
            ? Dinosaur3
            : Dinosaur4
        }
        alt="loading..."
        style={{ width: 300, rotate: 150 }}
      />
    </div>
  );
}

export default Center;
