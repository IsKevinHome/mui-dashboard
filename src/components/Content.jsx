import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Content = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ p: 2, backgroundColor: "gray" }}>
                <Grid item xs={12}>
                    <Paper sx={{ height: 250 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at
                        impedit eum ea dicta earum, aut repellat totam doloremque ipsum
                        reprehenderit porro voluptatum, maxime sapiente adipisci voluptatibus,
                        beatae veritatis quod.
                    </Paper>
                </Grid>
                {/* NEXT ROW */}
                <Grid item xs={12}>
                    <Paper sx={{ height: 250 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at
                        impedit eum ea dicta earum, aut repellat totam doloremque ipsum
                        reprehenderit porro voluptatum, maxime sapiente adipisci voluptatibus,
                        beatae veritatis quod.
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default Content;
