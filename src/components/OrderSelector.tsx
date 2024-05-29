import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from './ui/select'
type SortSelectorProps = {
    onSort: (value: string) => void
}
function OrderSelector({ onSort }: SortSelectorProps) {
    return (
        <div>
            <Select
                onValueChange={(value) => {
                    onSort(value)
                }}
            >
                <SelectTrigger className='w-[220px]'>
                    <SelectValue placeholder='Order by:' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Order by</SelectLabel>
                        <SelectItem value='0'>Reset</SelectItem>
                        {sortValues?.map((sortValue) => (
                            <SelectItem key={sortValue.id} value={sortValue.id}>
                                <span>{sortValue.name}</span>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

const sortValues = [
    {
        id: '-added',
        name: 'Date added',
        asc: '',
        desc: '-',
    },
    {
        id: 'relevance',
        name: 'Relevance',
        asc: '',
        desc: '-',
    },
    {
        id: '-release_date',
        name: 'Release Date',
        asc: '',
        desc: '-',
    },
    {
        id: '-rating',
        name: 'Rating',
        asc: '',
        desc: '-',
    },
    {
        id: '-name',
        name: 'Name',
        asc: '',
        desc: '-',
    },
    {
        id: '-metacritic',
        name: 'Popularity',
        asc: '',
        desc: '-',
    },
]

export default OrderSelector
