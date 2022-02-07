import Drawer from "@mui/material/Drawer";
import DrawerHeader from "./DrawerHeader";

const drawerWidth = 240;

const MobileDrawer = (props) => {
    return (
        <Drawer
            variant="temporary"
            // container={props.container}
            open={props.open}
            onClose={props.onClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
        >
            {/* add logo here */}
            <DrawerHeader />
            {props.drawer}

            {props.children}
        </Drawer>
    );
};

export default MobileDrawer;
