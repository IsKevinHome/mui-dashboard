import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// STYLES

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    color: "black",
    backgroundColor: "grey",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    minHeight: "82px",
}));

const DesktopAppBar = ({ open, onClick }) => {
    // const [open, setOpen] = useState(true);
    // const toggleDrawer = () => setOpen(!open);

    return (
        <AppBar
            position="fixed"
            open={open}
            sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Stockably
                </Typography>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onClick}
                    edge="start"
                    sx={{
                        marginLeft: "50px",
                        // marginLeft: 10.25,
                        // ...(open && { color: "red" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <Avatar sx={{ width: 40, height: 40 }}>KM</Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default DesktopAppBar;
