import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const BtnToggleTheme = () => {
  const { darkMode, toggleDark } = useContext(ThemeContext);
  return (
    <>
      <button className="toggle-darkmode" onClick={toggleDark}>
        {darkMode ? "LightMode" : "DarkMode"}
      </button>
    </>
  );
};
export default BtnToggleTheme;
