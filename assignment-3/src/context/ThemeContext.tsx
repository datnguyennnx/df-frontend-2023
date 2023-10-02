import React, { ReactNode, createContext, useState, useEffect, useContext, useMemo } from 'react'

type ThemeType =  { 
    darkMode: boolean
    colorTheme: string
    toggleTheme: () => void 
}

interface Props { 
    children: ReactNode
}

const ThemeContext = createContext<ThemeType>({} as ThemeType)

export function ThemeProvider ({ children }: Props) {
    const [darkMode, setDarkMode] = useState(localStorage.theme)
    const colorTheme = darkMode ? "light" : "dark"
    return (
        <ThemeContext.Provider 
        value={useMemo(() => ({ darkMode, colorTheme ,toggleTheme: () => setDarkMode(!darkMode)}), [darkMode, colorTheme])}>
            {children}
        </ThemeContext.Provider>
  )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === null) {
      throw new Error('useTheme must be used within a ThemeProvider')
    }

    useEffect(() => {
        if (context.darkMode) {
          localStorage.setItem('theme', context.colorTheme)
          document.body.classList.add('dark')
        } else {
          localStorage.setItem('theme', context.colorTheme)
          document.body.classList.remove('dark')
        }
      }, [context.darkMode, context.colorTheme])

    return context
}