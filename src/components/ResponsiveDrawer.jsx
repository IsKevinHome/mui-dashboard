import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Content from "./Content";

// STYLES
const drawerWidth = 240;

// theme for open drawer, theme is passed in to access the basic MUI theme object
const openedMixin = (theme) => ({
    backgroundColor: "#3f50b5",

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
    backgroundColor: "#3f50b5",
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
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    minHeight: "82px",
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    color: "black",
    backgroundColor: "#3f50b5",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    minHeight: "82px",
}));

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

const drawer = (
    <div>
        <DrawerHeader />
        <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                <ListItem button key={text} sx={{ "padding-left": 24, "padding-right": 24 }}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>
);

const container = window !== undefined ? () => window().document.body : undefined;

export default function MiniDrawer() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => setOpen(!open);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            {/* ~~~~~~~~~ AppBar ~~~~~~~~~~~ */}
            {/* flex and justifyContent to center horizontally */}
            <AppBar position="fixed" open={open} sx={{ display: "flex", justifyContent: "center" }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Stockably
                    </Typography>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{
                            marginLeft: 2,
                            // marginLeft: 10.25,
                            // ...(open && { color: "red" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* ~~~~~~~~~ DRAWER ~~~~~~~~~~~ */}
            <Drawer variant="permanent" open={open}>
                <DrawerHeader />

                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem
                            button
                            key={text}
                            sx={{ "padding-left": 24, "padding-right": 24 }}
                        >
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {/* ~~~~~~~~~ CONTENT ~~~~~~~~~~~ */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                <DrawerHeader />
                <Content />
            </Box>
        </Box>
    );
}
