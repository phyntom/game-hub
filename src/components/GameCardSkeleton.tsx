import { MdOutlineStar } from 'react-icons/md'

export const GameCardSkeleton = () => {
    return (
        <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden'>
            <div className='lg:h-48 md:h-36 px-2 bg-gray-100 dark:bg-slate-700 rounded-t-2xl' />
            <div className=' bg-gray-100 m-2 px-2 h-8 w-auto dark:bg-slate-700'></div>
            <div className='flex m-2 px-2 gap-1 text-slate-500'>
                <div className='h-7 w-7 bg-gray-100 dark:bg-slate-700'></div>
                <div className='h-7 w-7 bg-gray-100 dark:bg-slate-700'></div>
                <div className='h-7 w-7 bg-gray-100 dark:bg-slate-700'></div>
                <div className='h-7 w-7 bg-gray-100 dark:bg-slate-700'></div>
            </div>
            <div className='flex justify-between m-2 px-2'>
                <div className='h-7 w-10 text-gray-100 dark:text-slate-700 inline-flex'>
                    <span>
                        <MdOutlineStar />
                    </span>
                    <span>
                        <MdOutlineStar />
                    </span>
                    <span>
                        <MdOutlineStar />
                    </span>
                </div>
                <div className='flex items-center'>
                    <span className='mr-1'></span>
                    <div className='h-7 w-10 bg-gray-100 dark:bg-slate-700'></div>
                </div>
            </div>
            <div className='flex flex-wrap justify-around m-2 px-2 gap-2'>
                <div className='basis-6/12 h-4 bg-gray-100 dark:bg-slate-700 rounded'></div>
                <div className='basis-[45%] h-4 bg-gray-100 dark:bg-slate-700 rounded'></div>
                <div className='basis-6/12 h-4 bg-gray-100 dark:bg-slate-700 rounded'></div>
                <div className='basis-[45%] h-4 bg-gray-100 dark:bg-slate-700 rounded'></div>
            </div>
        </div>
    )
}
