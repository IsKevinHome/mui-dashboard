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
    location,
    fbaAvailability,
    reserved,
    totalAvailable,
    marketplacesInTransit,
    available = 0,
    inTransit = 0,
    completed = 0,
    inProduction = 0,
    value = 0
) {
    return {
        location,
        fbaAvailability,
        reserved,
        totalAvailable,
        marketplacesInTransit,
        available,
        inTransit,
        completed,
        inProduction,
        value,
    };
}

const rows = [
    createData("US", 237, 9.0, 37, 4.3),
    createData("BR", 262, 16.0, 24, 6.0),
    createData("MX", 305, 3.7, 67, 4.3),
    createData("CA", 356, 16.0, 49, 3.9),
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: "theme.palette.action.hover",
    },
}));

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: "none",
    borderBottom: "none",
}));

const StyledTableSubHeadCell = styled(TableCell)(({ theme }) => ({
    borderBottom: "1px solid lightgrey",
    fontWeight: "100",
}));

const StyledCell = styled(TableCell)(({ theme, isLastInSection = false }) => ({
    borderBottom: "none",
    ...(isLastInSection && { borderRight: "1px solid lightgrey" }),
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
                            <StyledTableSubHeadCell align="left">
                                FBA Availability
                            </StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="left">Reserved</StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="left">
                                Total Available
                            </StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="left">In Transit</StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="left">Available</StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="left">In Transit</StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="left">Completed</StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="left">
                                In Production
                            </StyledTableSubHeadCell>
                            <StyledTableSubHeadCell align="left">Value</StyledTableSubHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.location}>
                                <StyledCell component="th" scope="row">
                                    {row.location}
                                </StyledCell>
                                <StyledCell align="left">{row.fbaAvailability}</StyledCell>
                                <StyledCell align="left">{row.reserved}</StyledCell>
                                <StyledCell align="left">{row.totalAvailable}</StyledCell>
                                <StyledCell align="left" isLastInSection>
                                    {row.marketplacesInTransit}
                                </StyledCell>
                                <StyledCell align="left">{row.available}</StyledCell>
                                <StyledCell align="left" isLastInSection>
                                    {row.inTransit}
                                </StyledCell>
                                <StyledCell align="left">{row.completed}</StyledCell>
                                <StyledCell align="left">{row.inProduction}</StyledCell>
                                <StyledCell align="left">{row.value}</StyledCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
