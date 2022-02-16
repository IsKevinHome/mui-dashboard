import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import item from "../../../img/item.jpeg";
import ItemTable from "./ItemTable";

const Item = (props) => {
    return (
        <Box sx={{ mt: 3 }}>
            <Grid container>
                <Grid item>
                    <Typography variant="h5" component="h1" gutterBottom>
                        <b>{props.itemName}</b>
                    </Typography>
                    <Typography>ASIN/UPC: 15313</Typography>
                    <Typography>Cost Per Unit: $5.00</Typography>
                    <Typography>Total Value: $5,000</Typography>
                </Grid>
            </Grid>
            {/* ITEM TABLE IS NOT RESPONSIVE AND BREAKS ON MOBILE, INCLUDING THE NAVBAR. */}
            <ItemTable />
        </Box>
    );
};

export default Item;
