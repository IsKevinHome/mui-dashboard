import React, { useState } from "react";
import Box from "@mui/material/Box";
//
import MainAppBar from "./drawers/MainAppBar";
import DrawerContents from "./drawers/DrawerContents";
import DesktopDrawer from "./drawers/DesktopDrawer";
import MobileDrawer from "./drawers/MobileDrawer";

const HomePageInner = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => setOpen(!open);
    const drawer = <DrawerContents onClick={toggleDrawer} />;
    return (
        <>
            <MainAppBar open={open} onClick={toggleDrawer} />
            <Box component="nav" aria-label="menu items">
                <MobileDrawer open={open} onClose={toggleDrawer} drawer={drawer} />
                <DesktopDrawer open={open} drawer={drawer} />
            </Box>
        </>
    );
};

export default HomePageInner;
