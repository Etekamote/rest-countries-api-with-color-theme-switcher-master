import {createContext, useState} from "react"


type ThemeType = "light" | "dark"

type ThemeContextType = {
    theme: ThemeType,
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}


const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeContextProvider = ({children} : {children: React.ReactNode}) => {

    
    const [theme, setTheme] = useState<ThemeType>("light")

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
