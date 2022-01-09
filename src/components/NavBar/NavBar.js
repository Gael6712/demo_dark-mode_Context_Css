import React from "react";
import BtnToggleTheme from "../ToggleTheme/BtnToggleTheme";

export default function NavBar() {
  return (
    <div className="navBar">
      <BtnToggleTheme />
      <span>
        {" "}
        <h5>Simple d'utilisation !</h5>
      </span>
    </div>
  );
}
