import { useGenres } from '../hooks/useGenres'
import { Genre } from '../model'
import { getOptimizedImage } from '../utils/getOptimizedImage'
import { Bars } from 'react-loader-spinner'
import { useTheme } from './ThemeProvider'

interface GenreListProps {
    // eslint-disable-next-line no-unused-vars
    onItemSelect: (genre: Genre) => void
}
//

const GenreList = ({ onItemSelect }: GenreListProps) => {
    const { genres, isLoading } = useGenres()
    const { theme } = useTheme()
    const color: string = theme === 'light' ? '#94a3b8' : '#f8fafc'
    return (
        <div className='dark:text-slate-500 p-0 m-0 text-slate-800'>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                {isLoading && <Bars color={color} />}
                {genres.map((genre) => (
                    <div
                        key={genre.id}
                        onClick={() => onItemSelect(genre)}
                        className='flex justify-around items-center mx-2 gap-2 py-2 cursor-pointer'
                    >
                        <img
                            className='h-14 w-14 object-cover rounded-lg'
                            src={getOptimizedImage(genre.image_background)}
                        />

                        <div className='hidden sm:block text-sm truncate w-11/12'>{genre.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GenreList
