import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiIconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import NightModeSwitch from "../NightModeSwitch";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import AvatarButton from "./buttons/AvatarButton";

// STYLES
const AppBar = styled(MuiAppBar)(({ theme }) => ({
    position: "fixed",
    color: "black",
    backgroundColor: "white",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    minHeight: "82px",
    // maxHeight: "82px",
}));

const IconButton = styled(MuiIconButton)(({ theme }) => ({
    color: "#03045e",
    borderRadius: "35%",
    backgroundColor: "#ced4da",
    width: 34,
    height: 34,
}));

const DesktopAppBar = ({ open, onClick }) => {
    // const [open, setOpen] = useState(true);
    // const toggleDrawer = () => setOpen(!open);

    return (
        <AppBar
            open={open}
            sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
            }}
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
                        marginLeft: 2,
                        border: "none",
                        // marginLeft: 10.25,
                        // ...(open && { color: "red" }),
                    }}
                >
                    <MenuIcon sx={{ color: "#6c757d" }} />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />

                <Stack direction="row" spacing={2}>
                    {/* <NightModeSwitch /> */}
                    <Badge color="primary" badgeContent="4">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{
                                border: "none",
                                // marginLeft: 10.25,
                                // ...(open && { color: "red" }),
                            }}
                        >
                            <NotificationsOutlinedIcon sx={{ color: "#6c757d" }} />
                        </IconButton>{" "}
                    </Badge>

                    <AvatarButton />
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default DesktopAppBar;
