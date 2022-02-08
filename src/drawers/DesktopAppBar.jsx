import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiIconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

// STYLES
const AppBar = styled(MuiAppBar)(({ theme }) => ({
    position: "fixed",
    color: "#03045e",
    backgroundColor: "lightgrey",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    minHeight: "82px",
}));

const IconButton = styled(MuiIconButton)(({ theme }) => ({
    color: "#03045e",
    borderRadius: "35%",
    backgroundColor: "none",
}));

const DesktopAppBar = ({ open, onClick }) => {
    // const [open, setOpen] = useState(true);
    // const toggleDrawer = () => setOpen(!open);

    return (
        <AppBar open={open} sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Material UI
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
                    <MenuIcon />
                </IconButton>

                <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
        </AppBar>
    );
};

export default DesktopAppBar;
