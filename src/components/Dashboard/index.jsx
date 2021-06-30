import React, { useState } from "react";
import "./Dashboard.scss";
import Header from "../Header";
import Left from "../Left";
import Right from "../Right";
import Bottom from "../Bottom";
import Center from "../Center";

function Dashboard() {
  return (
    <div className="app">
      <Header />

      <Left />
      <Right />
      <Bottom />
      <Center />
    </div>
  );
}

export default Dashboard;
