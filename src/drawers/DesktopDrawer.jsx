import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DrawerHeader from "./DrawerHeader";

import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";

import { Link } from "react-router-dom";

// STYLES
const drawerWidth = 240;

// theme for open drawer, theme is passed in to access the basic MUI theme object
const openedMixin = (theme) => ({
    backgroundColor: "lightgrey",

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
    backgroundColor: "lightgrey",
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

const listData = [
    {
        text: "Inventory",
        icon: <InsertChartOutlinedIcon />,
        route: "inventory",
    },
    {
        text: "Orders",
        icon: <InventoryOutlinedIcon />,
        route: "orders",
    },
    {
        text: "Vendors",
        icon: <RecentActorsOutlinedIcon />,
        route: "vendors",
    },
];

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
                <List>
                    {listData.map((element, index) => (
                        <ListItem
                            button
                            key={element.text}
                            sx={{ "padding-left": 24, "padding-right": 24 }}
                        >
                            <ListItemIcon>{element.icon}</ListItemIcon>
                            <ListItemText primary={element.text} />
                        </ListItem>
                    ))}
                </List>

                {props.children}
            </Drawer>
        </div>
    );
};

export default DesktopDrawer;
