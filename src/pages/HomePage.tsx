import useFetchGames from '@/hooks/useFetchGame'
import { useState } from 'react'
import GameCard from '@/components/GameCard'
import PlatformSelector from '@/components/PlatformSelector'
import OrderSelector from '@/components/OrderSelector'
import OrderBySelector from '@/components/OrderBySelector'

function HomePage() {
    const [platform, setPlatform] = useState<number | null>(null)
    const [ordering, setOrdering] = useState<string>('-relevance')
    const { isLoading, error, data } = useFetchGames({
        params: { ordering: ordering, parent_platforms: platform ?? undefined },
    })

    const onSelect = (value: string) => {
        if (!value || value === '0') {
            setPlatform(null)
        } else {
            setPlatform(parseInt(value))
        }
    }

    const onSort = (value: string) => {
        if (!value || value === '0') {
            setOrdering('-relevance')
        } else {
            setOrdering(value)
        }
    }

    return (
        // <Profiler id='home' onRender={onRenderCallback}>
        <div className='h-[100%] mt-28'>
            <div className='flex flex-col items-start gap-2'>
                <div className='flex w-[100%] gap-2'>
                    <PlatformSelector onSelect={onSelect} /> <OrderSelector onSort={onSort} />{' '}
                    <OrderBySelector />
                </div>
                <div className='flex flex-wrap gap-2 justify-between'>
                    {isLoading && <div>Loading...</div>}
                    {error && <div>{error.message}</div>}
                    {data && data.map((game) => <GameCard key={game.id} game={game} />)}
                </div>
            </div>
        </div>
        // </Profiler>
    )
}

export default HomePage
