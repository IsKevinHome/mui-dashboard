import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NightModeSwitch from "./NightModeSwitch";

import AvatarButton from "./appbars/buttons/AvatarButton";

const Chip = () => {
    return (
        <div
            style={{
                width: "120px",
                height: "48px",
                backgroundColor: "rgb(227, 242, 253)",
                borderRadius: "27px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <span>
                <AvatarButton />
            </span>
            <span style={{ marginLeft: "5px" }}></span>
            <span>
                {/* <NotificationsOutlinedIcon sx={{ fontSize: 34, color: "rgb(33, 150, 243)" }} /> */}
                <NightModeSwitch />
            </span>
        </div>
    );
};

export default Chip;
