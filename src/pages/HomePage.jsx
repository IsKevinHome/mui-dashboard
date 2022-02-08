import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import HomePageInner from "./HomePageInner";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// Pages
import Inventory from "./Inventory";
import Orders from "./Orders";

const HomePage = () => {
    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <HomePageInner />
                <Routes>
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </Box>
        </Router>
    );
};

export default HomePage;
