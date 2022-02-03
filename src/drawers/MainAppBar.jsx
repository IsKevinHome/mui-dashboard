import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// STYLES

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    color: "black",
    backgroundColor: "#3f50b5",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    minHeight: "82px",
}));
const MainAppBar = ({ open, onClick }) => {
    // const [open, setOpen] = useState(true);
    // const toggleDrawer = () => setOpen(!open);

    return (
        <AppBar position="fixed" open={open} sx={{ display: "flex", justifyContent: "center" }}>
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
                        marginLeft: 2,
                        // marginLeft: 10.25,
                        // ...(open && { color: "red" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default MainAppBar;
