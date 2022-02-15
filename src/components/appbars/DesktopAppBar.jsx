import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiIconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import AppBarButton from "./buttons/AppBarButton";
import { blue } from "@mui/material/colors";
import AvatarButton from "./buttons/AvatarButton";
import DesktopAppBarSearch from "./inputs/DesktopAppBarSearch";

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
    borderRadius: "8px",
    backgroundColor: "rgb(227, 242, 253)",
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
                <Box
                    component="img"
                    sx={{ width: 34, height: 34, mr: 1 }}
                    src={require("./box.png")}
                />
                <Typography variant="h6" noWrap component="div" sx={{ color: blue[900] }}>
                    Stockably
                </Typography>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onClick}
                    edge="start"
                    sx={{
                        marginLeft: 5,
                        border: "none",
                        // marginLeft: 10.25,
                        // ...(open && { color: "red" }),
                    }}
                >
                    <MenuIcon sx={{ color: "rgb(33, 150, 243)" }} />
                </IconButton>
                <DesktopAppBarSearch />
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ marginRight: 2 }}>
                    <Badge color="primary" badgeContent="4">
                        <AppBarButton>
                            <NotificationsOutlinedIcon sx={{ color: "rgb(33, 150, 243)" }} />
                        </AppBarButton>
                    </Badge>
                </Box>
                <AvatarButton />
                {/* <NightModeSwitch /> */}
                {/* <AppBarChip /> */}
            </Toolbar>
        </AppBar>
    );
};

export default DesktopAppBar;
