import React from "react";
import { BallTriangle } from "@agney/react-loading";

const Loading = () => {
  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "200px 0px",
        alignItems: "center",
      }}
    >
      <div className="loading">
        <BallTriangle width="70" className="ball-triangle" />
        <h2 className="py-4" style={{ color: "rgb(255, 0, 55)" }}>
          {" "}
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default Loading;
