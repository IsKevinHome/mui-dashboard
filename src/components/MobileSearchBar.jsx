import React from "react";
import { styled } from "@mui/material/styles";

import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    color: "black",
    backgroundColor: "white",
    // commented out so the mobile drawer covers everything.
    // zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    minHeight: "82px",
}));
const MobileSearchBar = ({ toggle, searchState }) => {
    return (
        <div>
            <ClickAwayListener onClickAway={toggle}>
                <Grow in={searchState}>
                    <AppBar
                        position="fixed"
                        sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "center" }}
                    >
                        <Toolbar>
                            <TextField fullWidth id="fullWidth" label="search" />
                        </Toolbar>
                    </AppBar>
                </Grow>
            </ClickAwayListener>
        </div>
    );
};

export default MobileSearchBar;
