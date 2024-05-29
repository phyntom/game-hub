import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
    children: ReactNode
    defaultTheme: Theme
    storageKey: string
}

type ThemeContextProviderProps = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeContextProviderProps = {
    theme: 'system',
    setTheme: () => {
        /** */
    },
}

const ThemeContextProvider = createContext<ThemeContextProviderProps>(initialState)

export function useTheme() {
    const context = useContext(ThemeContextProvider)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export default function ThemeProvider({ children, defaultTheme, storageKey }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    useEffect(() => {
        const root = window.document.documentElement
        // will remove argument passed if it is present to the element
        root.classList.remove('light', 'dark')

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            root.classList.add(systemTheme)
            return
        }
        root.classList.add(theme)
    }, [theme])

    return (
        <ThemeContextProvider.Provider
            value={{
                theme,
                setTheme: (theme: Theme) => {
                    localStorage.setItem(storageKey, theme)
                    setTheme(theme)
                },
            }}
        >
            {children}
        </ThemeContextProvider.Provider>
    )
}
