import { useContext } from "react";
import DrawerHeader from "../../drawers/DrawerHeader";
import Item from "./components/Item";
import DropDownSearch from "./components/DropDownSearch";
import Box from "@mui/material/Box";
import DrawerContext from "../../context/DrawerContext";
import { styled } from "@mui/material/styles";

const Inventory = (props) => {
    const { open } = useContext(DrawerContext);
    // let width = open ? "calc(100vw - 295px)" : "calc(100vw - 130px)";
    const styleBackground = {
        height: "calc(100vh - 128px)",
        width: "100vw",
        maxWidth: "100%",
        borderRadius: "12px 12px 0px 0px",
        p: "20px",
        ml: 0,
        mr: 3,
        mt: "88px",
    };

    const StyledBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.bgColor,
    }));

    return (
        <>
            <StyledBox sx={styleBackground}>
                {/* <DrawerHeader /> */}
                <Box sx={{ px: 3, pt: 3 }}>
                    {/* <Box sx={{ backgroundColor: "rgb(227, 242, 253)", borderRadius: "12px 12px 0px 0px" }}> */}
                    <Box>
                        <DropDownSearch />
                        <Item itemName="Item_Name" />
                    </Box>
                </Box>
            </StyledBox>
        </>
    );
};

export default Inventory;
