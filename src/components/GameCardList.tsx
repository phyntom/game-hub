import { useEffect, useState } from 'react'
import { createApiService } from '../service/apiService'
import { GameCard } from './GameCard'
import { Game } from '../model'
import { CanceledError } from 'axios'
import { GameCardSkeleton } from './GameCardSkeleton'

const GameCardList = () => {
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const abort = new AbortController()
        setIsLoading(true)
        createApiService()
            .getAll('games', abort.signal)
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
    }, [])

    function renderCardSkeleton() {
        return new Array(12).fill(0).map((index) => <GameCardSkeleton key={index} />)
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
