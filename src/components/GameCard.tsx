import { MdOutlineReviews, MdOutlineStar } from 'react-icons/md'
import { Game } from '../model'

type GameCardProps = Pick<
    Game,
    'name' | 'genres' | 'background_image' | 'rating' | 'reviews_count' | 'released'
>

export const GameCard = ({
    name,
    genres,
    background_image,
    rating,
    reviews_count,
    released,
}: GameCardProps) => {
    return (
        <div className='bg-white dark:bg-slate-800 rounded-2xl shadow-2xl'>
            <img
                className='lg:h-48 md:h-36 w-full object-cover rounded-t-2xl'
                src={background_image}
                alt='cover image'
            />
            <div>
                <h1 className='text-slate-900 px-2 dark:text-white mt-5 text-xl md:text-2xl font-light md:font-medium tracking-tight'>
                    {name}
                </h1>
            </div>
            <div className='flex justify-between m-2 px-2'>
                <span>
                    <MdOutlineStar />
                    {rating}
                </span>
                <div className='flex items-center'>
                    <span className='mr-1'>
                        <MdOutlineReviews />
                    </span>
                    <span>{reviews_count}</span>
                </div>
            </div>
            <div className='flex flex-wrap justify-center md:justify-between m-2 px-2'>
                <div className='basis-1/2 text-xs md:text-sm lg:text-base'>Genres:</div>
                <div className='basis-1/2 md:text-right border-t dark:border-gray-700 border-gray-300'>
                    <span className='text-stone-900 dark:text-slate-400 text-xs'>
                        {genres.map((genre) => genre.name).join(' | ')}
                    </span>
                </div>
                <div className='basis-1/2 text-xs md:text-sm lg:text-base'>Release Date:</div>
                <div className='basis-1/2 text-stone-900 dark:text-slate-400 text-xs md:text-right border-t dark:border-gray-700 border-gray-300'>
                    {released}
                </div>
            </div>
        </div>
    )
}

//src = 'https://dummyimage.com/720x400';
