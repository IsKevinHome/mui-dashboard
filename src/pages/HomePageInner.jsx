import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
//
import DesktopAppBar from "../components/appbars/DesktopAppBar";
import MobileAppBar from "../components/appbars/MobileAppBar";
import DrawerContents from "../drawers/DrawerContents";
import DesktopDrawer from "../drawers/DesktopDrawer";
import MobileDrawer from "../drawers/MobileDrawer";
//
import DrawerContext from "../context/DrawerContext";
import DarkModeContext from "../context/DarkModeContext";

// const drawerWidth = 240;

const HomePageInner = () => {
    // const [open, setOpen] = useState(false);
    // const toggleDrawer = () => setOpen(!open);
    const { open, toggleDrawer } = useContext(DrawerContext);
    const { changeTheme } = useContext(DarkModeContext);

    const drawer = <DrawerContents onClick={toggleDrawer} />;
    return (
        <>
            {/* <Button sx={{ mt: "300px" }} onClick={changeTheme}>
                clickmeeeee
            </Button> */}
            <DesktopAppBar open={open} onClick={toggleDrawer} changeTheme={changeTheme} />
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
