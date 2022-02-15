import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "./DropDownButton";
import TextField from "@mui/material/TextField";

const Item = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item>
                    <Button placeholder="Brand" />
                </Grid>
                <Grid item>
                    <Button placeholder="Marketplace" />
                </Grid>
                <Grid item>
                    <Button placeholder="Sort By" />
                </Grid>
                <Grid item>
                    <Button placeholder="Sort By SKU" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Item;
