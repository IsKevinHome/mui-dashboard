import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
    return (
        <DarkModeProvider>
            <div className="App">
                <HomePage />
            </div>
        </DarkModeProvider>
    );
}

export default App;
