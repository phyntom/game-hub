import { useEffect, useState } from 'react'
import { createApiService } from '../service/apiServide'
import { GameCard } from './GameCard'
import { Game } from '../model'

const GameCardList = () => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        const abort = new AbortController()
        createApiService()
            .getAll('games', abort.signal)
            .then((response) => {
                setGames(response)
            })
            .catch((err) => {
                console.error(err)
            })
        return () => {
            abort.abort()
        }
    }, [])
    return (
        <div className='grid col-span-full md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    name={game.name}
                    genres={game.genres}
                    background_image={game.background_image}
                    rating={game.rating}
                    reviews_count={game.reviews_count}
                    released={game.released}
                />
            ))}
        </div>
    )
}

export default GameCardList
