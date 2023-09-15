import { Input } from '@/components/ui/input'

const SearchBox = () => {
    return (
        <div>
            <Input
                type='text'
                placeholder='Search'
                className='w-[350px] lg:w-[868px] dark:dark:bg-slate-950 bg-gray-50 p-2 rounded-xl focus:outline-none'
            />
        </div>
    )
}

export default SearchBox
