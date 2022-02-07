import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import DrawerHeader from "./DrawerHeader";

const drawerWidth = 240;

const listData = [
    {
        text: "Inventory",
        icon: <InsertChartOutlinedIcon />,
    },
    {
        text: "Orders",
        icon: <InventoryOutlinedIcon />,
    },
    {
        text: "Vendors",
        icon: <RecentActorsOutlinedIcon />,
    },
];

const MobileDrawer = (props) => {
    return (
        <Drawer
            variant="temporary"
            // container={props.container}
            open={props.open}
            onClose={props.onClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
        >
            {/* add logo here */}
            <DrawerHeader />
            <List>
                {listData.map((element, index) => (
                    <ListItem
                        button
                        key={element.text}
                        sx={{ "padding-left": 24, "padding-right": 24 }}
                    >
                        <ListItemIcon>{element.icon}</ListItemIcon>
                        <ListItemText primary={element.text} />
                    </ListItem>
                ))}
            </List>
            {props.children}
        </Drawer>
    );
};

export default MobileDrawer;
