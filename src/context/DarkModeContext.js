import { createContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <DarkModeContext.Provider
            value={{
                isDarkTheme,
                changeTheme,
            }}
        >
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeContext;
