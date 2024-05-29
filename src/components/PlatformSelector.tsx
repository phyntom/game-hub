import useFetchPlatforms from '@/hooks/useFetchPlatforms'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from './ui/select'

interface PlatformSelectorProps {
    onSelect: (value: string) => void
}

function PlatformSelector({ onSelect }: PlatformSelectorProps) {
    const { isLoading, data } = useFetchPlatforms()
    return (
        <Select
            onValueChange={(value) => {
                onSelect(value)
            }}
        >
            <SelectTrigger className='w-[220px]'>
                {isLoading && <SelectValue placeholder='Loading ...' />}
                {data && <SelectValue placeholder='Select Platform' />}
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data && <SelectLabel>Platform</SelectLabel>}
                    <SelectItem value='0'>All</SelectItem>
                    {data?.map((platform) => (
                        <SelectItem key={platform.slug} value={platform.id.toString()}>
                            {platform.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default PlatformSelector
