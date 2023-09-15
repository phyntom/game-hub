import clsx from 'clsx'
import log from '../assets/logo.webp'
import { BiMoon, BiSun } from 'react-icons/bi'
import { useTheme } from './ThemeProvider'

const NavBar = () => {
    const navBarContainer = getNavBarContainerClassName()
    const { searchbox, logo } = getDefaultClassName()
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={navBarContainer}>
            <a href='#'>
                <img src={log} alt='website logo image' className={logo} />
            </a>
            <input type='text' className={searchbox} placeholder='Search ...' />
            <div
                onClick={() => {
                    toggleTheme()
                }}
            >
                {theme === 'light' ? (
                    <BiMoon className='h-6 w-6 text-blue-950' />
                ) : (
                    <BiSun className='h-6 w-6 text-white' />
                )}
            </div>
        </div>
    )
}

export default NavBar

const getNavBarContainerClassName = () => {
    return clsx('flex justify-between items-center gap-4')
}

const getDefaultClassName = () => {
    return {
        logo: 'h-12 w-12',
        searchbox: 'dark:dark:bg-slate-950 bg-gray-50 p-2 rounded-md grow focus:outline-none',
    }
}
