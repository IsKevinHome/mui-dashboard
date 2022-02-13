import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DropDown from "./DropDown";

const Item = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item>
                    <DropDown title="Brand" item1="hello" item2="world" sx={{ color: "red" }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Item;
