import { Bars, ThreeDots } from 'react-loader-spinner'
import { useTheme } from './ThemeProvider'

export const GameCardSkeleton = () => {
    const { theme } = useTheme()
    const color: string = theme === 'light' ? '#f3f4f6' : '#f8fafc'
    return (
        <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden w-full h-[401px]'>
            <div className='lg:h-60 md:h-48 px-2 bg-gray-100 dark:bg-slate-700 rounded-t-2xl' />
            <div className='m-2 px-2'>
                <ThreeDots
                    height='50'
                    width='100'
                    radius='9'
                    color={color}
                    ariaLabel='three-dots-loading'
                    visible={true}
                />
            </div>
            <div className='w-full mx-2 py-2'>
                <Bars height={80} width='auto' color={color} />
            </div>
        </div>
    )
}
