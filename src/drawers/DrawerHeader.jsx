import { styled } from "@mui/material/styles";
// This is used to offset the appbar.

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 0),
    // padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    minHeight: "82px",
}));

export default DrawerHeader;
