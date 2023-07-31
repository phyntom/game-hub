import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useSystemTheme } from '../hooks/useSystemTheme'

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
})

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { systemTheme } = useSystemTheme()
    const [theme, setTheme] = useState<string>(systemTheme)

    useEffect(() => {
        setTheme(systemTheme)
    }, [systemTheme])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
