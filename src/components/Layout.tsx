import { ReactNode } from 'react'
import NavBar from './NavBar'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='grid grid-rows-[auto,1fr,auto] min-h-screen text-slate-700 dark:bg-slate-900 font-poppins dark:text-neutral-200'>
            <header className='p-4 fixed top-0 w-full'>
                <NavBar />
            </header>
            {/*<aside className='col-span-4 md:col-span-2 lg:col-span-3 p-4'>Aside Menu</aside>*/}
            <main className='container mx-auto p-4 my-16'>{children}</main>
            <footer className='p-4 bottom-0 w-full'>
                <span className='text-xl font-bold'>2023 © GAMEHUB, Behind The Games</span>
            </footer>
        </div>
    )
}

export default Layout
