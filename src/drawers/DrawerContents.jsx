import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MuiListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";

import ListItemText from "@mui/material/ListItemText";
import PublicIcon from "@mui/icons-material/Public";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import { blue } from "@mui/material/colors";

import { Link } from "react-router-dom";

const listData = [
    {
        text: "Inventory",
        icon: <PublicIcon />,
        route: "inventory",
    },
    {
        text: "Orders",
        icon: <InventoryOutlinedIcon />,
        route: "orders",
    },
    {
        text: "Vendors",
        icon: <RecentActorsOutlinedIcon />,
        route: "vendors",
    },
];

const ListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
    color: theme.palette.primary.light,
}));

const DrawerContents = () => {
    return (
        <List sx={{ pt: 0 }}>
            {listData.map((element, index) => (
                <Link to={`/${element.route}`}>
                    <ListItem
                        button
                        key={element.text}
                        sx={{ "padding-left": 24, "padding-right": 24 }}
                    >
                        <ListItemIcon>{element.icon}</ListItemIcon>
                        <ListItemText primary={element.text} />
                    </ListItem>
                </Link>
            ))}
        </List>
    );
};

export default DrawerContents;
