import React from "react"

export const themes = {
    ligth : "светлая",
    dark: "темная"
  }
  
export const ThemeContext = React.createContext({
    theme: themes.ligth,
    toggleTheme: () => {
    
}})