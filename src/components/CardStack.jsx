import { Card, CardContent, Grid, Skeleton } from "@mui/material";

const CardStack = () => {
    return (
        <Grid container direction="column">
            <Card>
                <CardContent>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Skeleton />
                    <Skeleton />
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CardStack;
