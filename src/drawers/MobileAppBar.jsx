import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";

// STYLES

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    color: "black",
    backgroundColor: "white",
    // commented out so the mobile drawer covers everything.
    // zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    minHeight: "82px",
}));

const MobileAppBar = ({ open, onClick }) => {
    // const [open, setOpen] = useState(true);
    // const toggleDrawer = () => setOpen(!open);

    return (
        <AppBar
            position="fixed"
            open={open}
            sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "center" }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onClick}
                    edge="start"
                    sx={{
                        p: 0.75,
                        mx: 0,
                        backgroundColor: "rgba(156, 156, 156, 0.22)",
                        borderRadius: "40%",
                    }}
                >
                    <MenuSharpIcon />
                </IconButton>

                <IconButton
                    sx={{
                        mx: 1.5,
                        p: 0.75,
                        backgroundColor: "rgba(156, 156, 156, 0.22)",
                        borderRadius: "40%",
                    }}
                >
                    <SearchIcon />
                </IconButton>

                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <Chip avatar={<Avatar>KM</Avatar>} label="Kevin" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default MobileAppBar;
