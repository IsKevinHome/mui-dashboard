import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
    fiber = 0,
    vitaminA = 0,
    vitaminB12 = 0,
    vitaminC = 0,
    vitaminD = 0
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        fiber,
        vitaminA,
        vitaminB12,
        vitaminC,
        vitaminD,
    };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
}));

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: "none",
    borderBottom: "none",
}));

const StyledTableSubHeadCell = styled(TableCell)(({ theme }) => ({
    borderBottom: "1px solid #808080",
}));

const StyledCell = styled(TableCell)(({ theme, isLastInSection = false }) => ({
    borderBottom: "none",
    ...(isLastInSection && { borderRight: "1px solid #808080" }),
}));

export default function DenseTable() {
    return (
        <Box sx={{ mt: 3 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableHeadCell colspan={5}>
                                <Typography sx={{ fontSize: 16 }} component="h2">
                                    <b>Marketplaces</b>
                                </Typography>
                            </StyledTableHeadCell>
                            <StyledTableHeadCell colspan={2}>
                                <Typography sx={{ fontSize: 16 }} component="h2">
                                    <b>Warehouses</b>
                                </Typography>
                            </StyledTableHeadCell>
                            <StyledTableHeadCell colspan={3}>
                                <Typography sx={{ fontSize: 16 }} component="h2">
                                    <b>Production</b>
                                </Typography>
                            </StyledTableHeadCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableSubHeadCell>Location</StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="right">
                                FBA Availability
                            </StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="right">Reserved</StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="right">
                                Total Available
                            </StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="right">
                                In Transit
                            </StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="right">Available</StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="right">
                                In Transit
                            </StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="right">Completed</StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="right">
                                In Production
                            </StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="right">Value</StyledTableSubHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledCell component="th" scope="row">
                                    {row.name}
                                </StyledCell>
                                <StyledCell align="right">{row.calories}</StyledCell>
                                <StyledCell align="right">{row.fat}</StyledCell>
                                <StyledCell align="right">{row.carbs}</StyledCell>
                                <StyledCell align="right" isLastInSection>
                                    {row.protein}
                                </StyledCell>
                                <StyledCell align="right">{row.fiber}</StyledCell>
                                <StyledCell align="right" isLastInSection>
                                    {row.vitaminA}
                                </StyledCell>
                                <StyledCell align="right">{row.vitaminB12}</StyledCell>
                                <StyledCell align="right">{row.vitaminC}</StyledCell>
                                <StyledCell align="right">{row.vitaminD}</StyledCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
