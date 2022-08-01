import React from "react";
import background from "../assets/imgs/404_not_found.png";
function NotFound() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default NotFound;
