import { ThemeSwitcher } from './ThemeSwitcher'
import { Input } from './ui/input'
import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface NaivationBarProps {
    className?: string
}
function NavigationBar({ className }: NaivationBarProps) {
    return (
        <header className={cn(className)}>
            <div className='flex justify-between items-center gap-4 '>
                <Link to='/'>
                    <img src={logo} alt='website logo' className='size-12' />
                </Link>
                <Input />
                <div className='flex gap-4 items-center m-2'>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}

export default NavigationBar
