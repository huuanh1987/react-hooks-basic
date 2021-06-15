import React, { useState } from "react";
import "./ColorBox.scss";
ColorBox.propTypes = {};

function getRandomColor() {
  const colorList = ["deeppink", "green", "yellow", "red", "blue", "black"];
  const randomIndex = Math.trunc(Math.random() * 6);
  return colorList[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "green";
    console.log(initColor);
    return initColor;
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      {/* COLOR BOX */}
    </div>
  );
}

export default ColorBox;
