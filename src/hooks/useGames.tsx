import { useEffect, useState } from 'react'
import { createApiService } from '../service/apiService'
import { Game } from '../model'
import { CanceledError } from 'axios'

export function useGames() {
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState('')
    useEffect(() => {
        const abortController = new AbortController()
        setIsLoading(true)
        createApiService()
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
