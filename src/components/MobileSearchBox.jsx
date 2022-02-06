import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const MobileSearchBox = () => {
    const [toggle, setToggle] = useState(false);
    // for clicking on icon
    const handleChange = () => {
        setToggle((prev) => !prev);
    };

    // for click away
    const handleClickAway = () => {
        setToggle(false);
    };

    const searchButton = (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleChange}
            edge="start"
            sx={{
                p: 0.75,
                mx: 1,
                backgroundColor: "rgba(156, 156, 156, 0.22)",
                borderRadius: "40%",
            }}
        >
            <SearchIcon sx={{ backgroundColor: "none" }} />
        </IconButton>
    );
    return (
        <>
            <Box sx={{ display: "flex" }}>{toggle ? null : searchButton}</Box>
            <Box sx={{ width: "100%", mx: 2 }}>
                {toggle ? (
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <Collapse orientation="horizontal" in={toggle}>
                            <TextField
                                label="Search"
                                defaultValue="Search "
                                size="small"
                                sx={{ height: "36px" }}
                            />
                        </Collapse>
                    </ClickAwayListener>
                ) : null}
            </Box>
        </>
    );
};

export default MobileSearchBox;
