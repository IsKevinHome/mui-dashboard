import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DrawerHeader from "../drawers/DrawerHeader";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "darkgrey",
}));

const Vendors = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <DrawerHeader />
            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6} md={8}>
                    <Item>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae
                        nihil facere ipsa commodi voluptate, provident ex at totam eius repellat
                        quae, consectetur debitis non omnis sit repellendus odio tempore. quae,
                        consectetur debitis non omnis sit repellendus odio tempore. quae,
                        consectetur debitis non omnis sit repellendus odio tempore. quae,
                        consectetur debitis non omnis sit repellendus odio tempore.quae, consectetur
                        debitis non omnis sit repellendus odio tempore.
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nisi eos
                        quod quae incidunt explicabo, molestias quis quas blanditiis debitis quaerat
                        error, culpa repellat aliquid ea. Cupiditate porro debitis laborum.
                    </Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nisi eos
                        quod quae incidunt explicabo, molestias quis quas blanditiis debitis quaerat
                        error, culpa repellat aliquid ea. Cupiditate porro debitis laborum.
                    </Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Item>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae
                        nihil facere ipsa commodi voluptate, provident ex at totam eius repellat
                        quae, consectetur debitis non omnis sit repellendus odio tempore. quae,
                        consectetur debitis non omnis sit repellendus odio tempore. quae,
                        consectetur debitis non omnis sit repellendus odio tempore. quae,
                        consectetur debitis non omnis sit repellendus odio tempore.quae, consectetur
                        debitis non omnis sit repellendus odio tempore.
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Vendors;
