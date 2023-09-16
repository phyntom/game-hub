import { Input } from '@/components/ui/input'
import { useEffect, useRef } from 'react'
import { debounce } from '@/utils/debounce'

type SearchBoxProps = {
    onSearch: (searchText: string) => void
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const debouncedSearch = debounce((value) => {
        onSearch(value)
    }, 1500)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    return (
        <div className='w-[350px] lg:w-[868px]'>
            <Input
                ref={inputRef}
                onChange={() => {
                    const text = inputRef.current?.value
                    debouncedSearch(text)
                }}
                type='text'
                placeholder='Search'
                className='dark:dark:bg-slate-950 bg-gray-50 p-2 rounded-xl focus-visible:ring-transparent px-4'
            />
        </div>
    )
}

export default SearchBox
