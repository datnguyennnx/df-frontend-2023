'use client'

import { createContext, useContext, useEffect, useState, useMemo } from 'react'

type ThemeContextProviderType = {
  children: React.ReactNode
}

type ThemeContextType = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderType) {
  const [darkMode, setDarkMode] = useState<boolean>(
    typeof window !== 'undefined' && localStorage.theme,
  )

  return (
    <ThemeContext.Provider
      value={useMemo(
        () => ({
          darkMode,
          setDarkMode,
        }),
        [darkMode, setDarkMode],
      )}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider',
    )
  }

  useEffect(() => {
    if (context.darkMode) {
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.body.classList.remove('dark')
    }
  }, [context.darkMode])

  return context
}
