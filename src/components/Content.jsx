import Grid from "@mui/material/Grid";
import CardThird from "./CardThird";
import CardStack from "./CardStack";
import RectangleSkeleton from "./RectangleSkeleton";
import Card from "@mui/material/Card";
import StockablyAppBar from "./StockablyAppBar";

const Content = () => {
    return (
        <>
            <Card
                elevation={0}
                sx={{
                    "background-color": "rgb(227, 242, 253)",
                    mx: 2,
                    borderRadius: 2,
                    pb: 3,
                }}
            >
                <Grid container sx={{ p: 2 }}>
                    <Grid item xs={12}>
                        <Grid item container spacing={3}>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <CardThird />
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <CardThird />
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <CardStack />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* NEXT ROW */}
                    <Grid item container spacing={3} sx={{ p: 2 }}>
                        <Grid item xs={8}>
                            <RectangleSkeleton />
                        </Grid>
                        <Grid item xs={4}>
                            <RectangleSkeleton />
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default Content;
