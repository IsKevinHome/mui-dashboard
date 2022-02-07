import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import HomePageInner from "./HomePageInner";
import Box from "@mui/material/Box";
// Pages
import Inventory from "./Inventory";
// import Home from "./Home";

const HomePage = () => {
    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <HomePageInner />
                <Routes>
                    <Route path="/inventory" element={<Inventory />} />
                </Routes>
            </Box>
        </Router>
    );
};

export default HomePage;
