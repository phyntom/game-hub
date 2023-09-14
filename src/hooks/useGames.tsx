import { useEffect, useState } from 'react'
import { Game } from '../model'
import { CanceledError } from 'axios'
import { gameService } from '../service'

export function useGames() {
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const abortController = new AbortController()
        setIsLoading(true)
        gameService
            .getAll('/games', abortController.signal)
            .then((response) => {
                setGames(response)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                console.error(err)
            })
    }, [])
    return { games, error, isLoading }
}
