import React, { useState } from "react";
import "./Dashboard.scss";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import Bottom from "./Bottom";
import Center from "./Center";

function Dashboard(props) {
  return (
    <div className="app">
      <Header username={props?.username} />
      <Left />
      <Right />
      <Bottom />
      <Center actor={props?.actor} />
    </div>
  );
}

export default Dashboard;
