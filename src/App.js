import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { DarkModeProvider } from "./context/DarkModeContext";
import { darkTheme, lightTheme } from "./styles/Styles";
import CssBaseline from "@mui/material/CssBaseline";

// function App() {
//     return (
//         <DarkModeProvider>
//             <div className="App">
//                 <HomePage />
//             </div>
//         </DarkModeProvider>
//     );
// }

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <DarkModeProvider value={{ isDarkTheme, setIsDarkTheme, changeTheme }}>
            <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
                <CssBaseline />

                <div>
                    <HomePage />
                </div>
            </ThemeProvider>
        </DarkModeProvider>
    );
}

export default App;
