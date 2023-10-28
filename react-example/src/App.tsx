import React, { useEffect, useRef, useState } from "react";
import Examples from "./examples/Examples";
import "./App.css";
import { DashboardThemes, darkTheme } from "@frc-web-components/fwc/themes";

const themes = new DashboardThemes();
themes.addThemeRules("dark", darkTheme);

function App() {
  const dashboardThemes = useRef<DashboardThemes>(themes);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    dashboardThemes.current.setTheme(document.body, theme);
  }, [theme]);

  return (
    <div className="App">
      <div className="theme-chooser">
        <label>
          <input
            type="radio"
            name="theme-chooser"
            onClick={() => setTheme("light")}
            checked={theme === "light"}
          />{" "}
          Light Theme
        </label>
        <label>
          <input
            type="radio"
            name="theme-chooser"
            onClick={() => setTheme("dark")}
            checked={theme === "dark"}
          />{" "}
          Dark Theme
        </label>
      </div>
      <Examples />
    </div>
  );
}

export default App;
