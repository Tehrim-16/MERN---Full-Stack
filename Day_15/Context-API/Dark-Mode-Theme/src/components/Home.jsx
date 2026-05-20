import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home(){
    const {darkMode , setDarkMode } = useContext(ThemeContext);

    return (
        <div 
        style={{
            backgroundColor : darkMode ? "black" : "white",
            color : darkMode ? "white" : "black",
            height : "100vh",
            padding : "20px",
        }}
        >
            <h1>Context API Example</h1>

            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Theme 
            </button>
        </div>
    );
}

export default Home;