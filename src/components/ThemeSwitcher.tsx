import { GrMoon, GrSun, GrSystem } from 'react-icons/gr'
import { Fragment } from 'react/jsx-runtime'
import { useTheme } from './ThemeContext'

export function ThemeSwitcher() {
    const { setTheme } = useTheme()
    return (
        <Fragment>
            <GrSun
                onClick={() => {
                    setTheme('light')
                }}
            />
            <GrMoon
                onClick={() => {
                    setTheme('dark')
                }}
            />
            <GrSystem
                onClick={() => {
                    setTheme('system')
                }}
            />
        </Fragment>
    )
}
