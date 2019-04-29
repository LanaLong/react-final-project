import React from "react";
import "./App.css";
// import "typeface-roboto";
// почему не импортируется шрифт Roboto?
// import CssBaseline from "@material-ui/core/CssBaseline";
import MenuAppBar from "../MenuAppBar/MenuAppBar";

function App() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <MenuAppBar />
    </React.Fragment>
  );
}

export default App;
