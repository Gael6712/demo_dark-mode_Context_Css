import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import Home from "./pages/Home";

function App() {
  const { darkMode } = useContext(ThemeContext);
  const theme = !darkMode ? "lightmode" : "darkmode";
  // console.log(theme);

  return (
    <div className={theme}>
      <Home />
    </div>
  );
}

export default App;
