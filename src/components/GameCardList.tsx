import { useEffect, useState } from 'react'
import { GameCard } from './GameCard'
import { Game } from '../model'
import { CanceledError } from 'axios'
import { GameCardSkeleton } from './GameCardSkeleton'
import { gameService } from '../service'
import { GameQuery } from '@/App'

interface GameCardListProps {
    gameQuery: GameQuery
}

const GameCardList = ({ gameQuery }: GameCardListProps) => {
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const abort = new AbortController()
        setIsLoading(true)
        gameService
            .getAll('games', abort.signal, {
                params: {
                    genres: gameQuery?.genre?.id,
                    parent_platforms: gameQuery?.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                },
            })
            .then((response) => {
                setGames(response)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                console.error(err)
                setIsLoading(false)
            })
        return () => {
            abort.abort()
        }
    }, [gameQuery])

    function renderCardSkeleton() {
        const skeletons: number[] = new Array(12)
        for (let i = 0; i < skeletons.length; i++) {
            skeletons[i] = i
        }
        return skeletons.map((item) => <GameCardSkeleton key={item} />)
    }
    return (
        <div className='grid col-span-full md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {isLoading && renderCardSkeleton()}
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    name={game.name}
                    genres={game.genres}
                    background_image={game.background_image}
                    rating={game.rating}
                    reviews_count={game.reviews_count}
                    released={game.released}
                    parent_platforms={game.parent_platforms}
                />
            ))}
        </div>
    )
}

export default GameCardList
