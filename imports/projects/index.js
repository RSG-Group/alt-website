// @flow
// Get all our different project cards.
import RSGComponents from "./RSGComponents";
import HyperBackground from "./hyper-background";
import Chess from "./Chess";
// Get React.
import React from "react";

export default () => (
  <div style={{display: "flex"}}>
    <RSGComponents/>
    <div style={{width: "1%"}}/>
    <HyperBackground/>
    <div style={{width: "1%"}}/>
    <Chess/>
  </div>
);