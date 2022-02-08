import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DrawerHeader from "../drawers/DrawerHeader";

const Orders = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "100vh",
                        borderRadius: "12px 12px 0px 0px",
                        mt: "83px",
                        px: "0px",
                        mx: "0px",
                    }}
                />
            </Container>
        </React.Fragment>
    );
};

export default Orders;
