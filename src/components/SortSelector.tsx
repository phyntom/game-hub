import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

type SortSelectorProps = {
    onItemSelect: (sortOrder: string) => void
}

const SortSelector = ({ onItemSelect }: SortSelectorProps) => {
    // create an array of object sort order with
    // key as the value and value as the label
    const sortOptions = [
        { value: '', label: 'Relevance' },
        { value: 'name', label: 'Name' },
        { value: '-added', label: 'Date added' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ]

    return (
        <Select
            onValueChange={(value) => {
                onItemSelect(value)
            }}
        >
            <SelectTrigger className='w-40'>
                <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
                {sortOptions.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SortSelector
