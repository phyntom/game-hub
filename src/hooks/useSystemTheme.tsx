import { useEffect, useState } from 'react'

export function useSystemTheme() {
    const [systemTheme, setSystemTheme] = useState('light')
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    useEffect(() => {
        const handleChange = (event: MediaQueryListEvent) => {
            const systemTheme = event.matches ? 'dark' : 'light'
            setSystemTheme(systemTheme)
            document.documentElement.classList.toggle('dark', systemTheme === 'dark')
        }
        mediaQuery.addEventListener('change', handleChange)
        setSystemTheme(mediaQuery.matches ? 'dark' : 'light')
        mediaQuery.matches
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])

    return { systemTheme }
}
