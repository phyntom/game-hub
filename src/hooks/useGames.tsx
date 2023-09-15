import { useEffect, useState } from 'react'
import { Game } from '../model'
import { CanceledError } from 'axios'
import { GameQuery } from '@/App'
import { gameService } from '@/service'

export function useGames(gameQuery: GameQuery) {
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState('')
    console.log(gameQuery.sortOrder)

    useEffect(() => {
        const abortController = new AbortController()
        setIsLoading(true)
        gameService
            .getAll('/games', abortController.signal, {
                params: {
                    genres: gameQuery?.genre?.id,
                    parent_platforms: gameQuery?.platform?.id,
                    ordering: gameQuery.sortOrder,
                },
            })
            .then((response) => {
                setGames(response)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                console.error(err)
            })
    }, [gameQuery?.genre?.id, gameQuery?.platform?.id, gameQuery.sortOrder])
    return { games, error, isLoading }
}
