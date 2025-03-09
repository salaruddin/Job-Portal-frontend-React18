import { createContext, useState } from "react";

export const ThemeContext = createContext({
   darkMode: false,
   toggleDarkMode: () => {},
});


const ThemeContextProvider = ({ children }: {children:React.ReactNode}) => {
   
   const [darkMode, setDarkMode] = useState<boolean>(false);

   const toggleDarkMode = ()=> setDarkMode((prevState) => !prevState);

   return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;

