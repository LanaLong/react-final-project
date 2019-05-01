import React from "react";
import MenuAppBar from "./components/MenuAppBar";
import Layout from "./components/Layout";

const style = {
  width: "100%",
  height: "100vh",
  boxSizing: "border-box",
  overflow: "hidden",
  background: "#cccccc"
};

const App = () => (
  <div style={style}>
    <MenuAppBar />
    <Layout />
  </div>
);

export default App;
