import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='mx-4'>
            <main>{children}</main>
        </div>
    )
}

export default Layout
