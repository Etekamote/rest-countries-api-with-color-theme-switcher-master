import {createContext, useState} from "react"


type ThemeType = "light" | "dark"

type ThemeContextType = {
    theme: ThemeType,
    setTheme?: React.Dispatch<React.SetStateAction<ThemeType>>
}


export const ThemeContext = createContext<ThemeContextType>({theme: "light"})

export const ThemeContextProvider = ({children} : {children: React.ReactNode}) => {

    
    const [theme, setTheme] = useState<ThemeType>("light")

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
