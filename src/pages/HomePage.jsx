import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DrawerProvider } from "../context/DrawerContext";

// Components
import HomePageInner from "./HomePageInner";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// Pages
import Inventory from "./inventory/Inventory";
import Orders from "./Orders";
import Vendors from "./Vendors";

const HomePage = () => {
    return (
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
    );
};

export default HomePage;
