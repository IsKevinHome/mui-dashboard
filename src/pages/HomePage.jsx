import HomePageInner from "./HomePageInner";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
// Components
import HomePageInner from "./HomePageInner";
import Box from "@mui/material/Box";
// Pages
import Home from "./Home";

const HomePage = () => {
    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <HomePageInner />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/inventory" element={<Inventory />}></Route>
                </Routes>
            </Box>
        </Router>
    );
};

export default HomePage;
