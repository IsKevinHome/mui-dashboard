import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiIconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import AppBarButton from "./buttons/AppBarButton";
import AvatarButton from "./buttons/AvatarButton";
import DesktopAppBarSearch from "./inputs/DesktopAppBarSearch";

// STYLES
const AppBar = styled(MuiAppBar)(({ theme }) => ({
    position: "fixed",
    color: theme.palette.primary.logo,
    // use background, not backgroundColor
    background: theme.palette.primary.dark,
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    minHeight: "82px",
    // maxHeight: "82px",
}));

// const IconButton = styled(MuiIconButton)(({ theme }) => ({
//     color: theme.palette.primary.main,
//     borderRadius: "8px",
//     // backgroundColor: "rgb(227, 242, 253)",
//     width: 34,
//     height: 34,
// }));

const IconButton = styled(MuiIconButton)(({ theme }) => ({
    color: theme.palette.primary.light,
    borderRadius: "8px",
    border: "1px solid" + theme.palette.primary.light,
    // backgroundColor: "#bbdffc",
    width: 34,
    height: 34,
}));

const DesktopAppBar = ({ open, onClick, changeTheme }) => {
    return (
        <AppBar
            open={open}
            sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
            }}
        >
            <Toolbar>
                {/* <Box
                    component="img"
                    sx={{ width: 34, height: 34, mr: 2 }}
                    src={require("./box.png")}
                /> */}
                <Typography variant="h6" noWrap component="div">
                    Stockably
                </Typography>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onClick}
                    edge="start"
                    sx={{
                        marginLeft: 10,
                        border: "none",
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <DesktopAppBarSearch />
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ marginRight: 2 }}>
                    <Badge color="primary" badgeContent="4">
                        <IconButton>
                            <NotificationsOutlinedIcon fontSize="small" />
                        </IconButton>
                    </Badge>
                </Box>
                <Box sx={{ marginRight: 2 }}>
                    <IconButton onClick={changeTheme}>
                        <DarkModeOutlinedIcon fontSize="small" />
                    </IconButton>
                </Box>
                <AvatarButton />

                {/* <NightModeSwitch /> */}
                {/* <AppBarChip /> */}
            </Toolbar>
        </AppBar>
    );
};

export default DesktopAppBar;
