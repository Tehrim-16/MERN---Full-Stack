import { useEffect, useState } from "react";
import "./Ex_UseEffect_DarkMode.css";

function Ex_UseEffect_DarkMode() {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    console.log("Welcome to Dark Mode");
  }, [dark]);

  return (

    <div className={dark ? "dark" : "light"}>

      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setDark(!dark)}>
        Change Theme
      </button>

    </div>

  );
}

export default Ex_UseEffect_DarkMode;