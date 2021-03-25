import React from "react";
import "./Loader.css";

export default () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "200px",
    }}
  >
    <div className="lds-dual-ring"></div>
  </div>
);
