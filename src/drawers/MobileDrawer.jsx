import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import DrawerHeader from "./DrawerHeader";

const drawerWidth = 240;

const drawer = (
    <div>
        <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                <ListItem button key={text} sx={{ "padding-left": 24, "padding-right": 24 }}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>
);
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

            {drawer}
        </Drawer>
    );
};

export default MobileDrawer;
