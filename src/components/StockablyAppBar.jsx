import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    color: "black",
    backgroundColor: "white",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
}));

function StockablyAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" sx={{ backgroundColor: "white", py: 1 }} elevation={0}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        marginLeft={1}
                        sx={{
                            color: "black",
                            textTransform: "uppercase",
                            m: 1,
                            fontWeight: "bold",
                        }}
                    >
                        Stockably
                    </Typography>
                    <Typography sx={{ flexGrow: 1 }}>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Typography>

                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default StockablyAppBar;
