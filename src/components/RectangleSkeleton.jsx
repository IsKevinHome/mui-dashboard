import { Card, CardContent, Grid, Skeleton } from "@mui/material";

const RectangleSkeleton = () => {
    return (
        <Card>
            <CardContent>
                <Skeleton variant="rectangular" width={"100%"} height={650} />
            </CardContent>
        </Card>
    );
};

export default RectangleSkeleton;
