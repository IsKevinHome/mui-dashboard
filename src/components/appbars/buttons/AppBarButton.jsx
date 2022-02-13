import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiIconButton from "@mui/material/IconButton";

const IconButton = styled(MuiIconButton)(({ theme }) => ({
    color: "inherit",
    borderRadius: "8px",
    backgroundColor: "rgb(227, 242, 253)",
    width: 34,
    height: 34,
}));

const AppBarButton = (props) => {
    return <IconButton>{props.children}</IconButton>;
};

export default AppBarButton;
