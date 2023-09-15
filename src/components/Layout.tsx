import { ReactNode } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='grid grid-rows-[auto,1fr,auto] min-h-screen text-slate-700 dark:bg-slate-900 font-poppins dark:text-neutral-200'>
            <header className='p-4 fixed top-0 w-full'>
                <NavBar />
            </header>
            <main className='mx-2 md:mx-4 lg:mx-16 p-2 my-16'>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
