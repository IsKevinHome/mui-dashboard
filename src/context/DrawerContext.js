import { createContext, useState } from "react";

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);

    return (
        <DrawerContext.Provider
            value={{
                open,
                toggleDrawer,
            }}
        >
            {children}
        </DrawerContext.Provider>
    );
};

export default DrawerContext;
