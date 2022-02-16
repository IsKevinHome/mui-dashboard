import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import DrawerHeader from "./DrawerHeader";

// STYLES
const drawerWidth = 240;

// theme for open drawer, theme is passed in to access the basic MUI theme object
const openedMixin = (theme) => ({
    backgroundColor: theme.palette.primary[900],
    border: "none",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    border: "none",
    backgroundColor: theme.palette.primary[900],
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

// COMPONENTS
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
        }),
    })
);

const DesktopDrawer = (props) => {
    return (
        <div>
            <Drawer
                variant="permanent"
                open={props.open}
                sx={{
                    display: { xs: "none", sm: "block" },
                }}
            >
                <DrawerHeader />

                {props.drawer}
                {props.children}
            </Drawer>
        </div>
    );
};

export default DesktopDrawer;
