import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme : () => {},
    lightTheme : () => {},
});

export const ThemeProvider = ThemeContext.Provider


// custom hooks -- fx hei
export default function useTheme (){
    return useContext(ThemeContext)
}