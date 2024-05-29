import NavigationBar from '@/components/NavigationBar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className='min-h-screen grid grid-rows-layout grid-cols-layout'>
            <NavigationBar className='row-span-1 col-start-2 col-span-4' />
            <div className='row-span-2 col-span-6'>
                <Outlet />
            </div>
        </div>
    )
}
