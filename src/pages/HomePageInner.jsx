import { useState, useContext } from "react";
import Box from "@mui/material/Box";
//
import DesktopAppBar from "../components/appbars/DesktopAppBar";
import MobileAppBar from "../components/appbars/MobileAppBar";
import DrawerContents from "../drawers/DrawerContents";
import DesktopDrawer from "../drawers/DesktopDrawer";
import MobileDrawer from "../drawers/MobileDrawer";
//
import DrawerContext from "../context/DrawerContext";

// const drawerWidth = 240;

const HomePageInner = () => {
    // const [open, setOpen] = useState(false);
    // const toggleDrawer = () => setOpen(!open);
    const { open, toggleDrawer } = useContext(DrawerContext);

    const drawer = <DrawerContents onClick={toggleDrawer} />;
    return (
        <>
            <DesktopAppBar open={open} onClick={toggleDrawer} />
            <MobileAppBar open={open} onClick={toggleDrawer} />

            <Box component="nav" aria-label="menu items">
                <MobileDrawer
                    /* close drawer on mobile by default*/
                    open={open && window.innerWidth < 600}
                    onClose={toggleDrawer}
                    drawer={drawer}
                />
                <DesktopDrawer open={open} drawer={drawer} />
            </Box>
        </>
    );
};

export default HomePageInner;
