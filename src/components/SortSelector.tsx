import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const SortSelector = () => {
    return (
        <Select>
            <SelectTrigger className='w-40'>
                <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='relevance'>Relevance</SelectItem>
                <SelectItem value='date'>Date added</SelectItem>
                <SelectItem value='name'>Name</SelectItem>
                <SelectItem value='release_date'>Release date</SelectItem>
                <SelectItem value='popularity'>Popularity</SelectItem>
                <SelectItem value='rating'>Average rating</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default SortSelector
