import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DrawerProvider } from "../context/DrawerContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

// Components
import HomePageInner from "./HomePageInner";
import Box from "@mui/material/Box";

// Pages
import Inventory from "./inventory/Inventory";
import Orders from "./Orders";
import Vendors from "./Vendors";

// Themes
import { darkTheme, lightTheme } from "../styles/Styles";

const HomePage = () => {
    const { isDarkTheme } = useContext(DarkModeContext);

    return (
        <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
            <DrawerProvider>
                <Router>
                    <Box sx={{ display: "flex" }}>
                        <Box>
                            <HomePageInner />
                        </Box>

                        <Routes>
                            <Route path="/inventory" element={<Inventory />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/vendors" element={<Vendors />} />
                        </Routes>
                    </Box>
                </Router>
            </DrawerProvider>
        </ThemeProvider>
    );
};

export default HomePage;
