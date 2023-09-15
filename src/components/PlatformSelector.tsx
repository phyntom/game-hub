import { usePlatforms } from '@/hooks/usePlatforms'
import { Platform } from '../model'

interface PlatformSelectorProps {
    onItemSelect: (platform: Platform) => void
}

export function PlatformSelector({ onItemSelect }: PlatformSelectorProps) {
    const { platforms } = usePlatforms()

    const onItemChange = (selectedItem: number) => {
        const selectedPlatform = platforms?.find((item) => item.id === selectedItem)
        if (selectedPlatform) {
            onItemSelect(selectedPlatform)
        }
    }

    return (
        <label>
            <select
                className='my-2 p-2 dark:bg-slate-800 rounded-md'
                onChange={(e) => {
                    onItemChange(parseInt(e.target.value))
                }}
            >
                <option value=''>Platforms</option>
                {platforms?.map((platform) => (
                    <option
                        key={platform.slug}
                        className='checked:bg-slate-800'
                        value={platform.id}
                    >
                        {platform.name}
                    </option>
                ))}
            </select>
        </label>
    )
}
