import { useEffect, useState } from 'react'
import { Genre } from '../model'
import { CanceledError } from 'axios'
import { genreService } from '../service'

export function useGenres() {
    const [genres, setGenres] = useState<Genre[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const abortController = new AbortController()
        setIsLoading(true)
        genreService
            .getAll('/genres', abortController.signal)
            .then((response) => {
                setGenres(response)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                console.error(err)
            })
    }, [])
    return { genres, error, isLoading }
}
