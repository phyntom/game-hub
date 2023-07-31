import { useEffect, useState } from 'react'
import { createApiService } from '../service/apiService'
import { Genre } from '../model'
import { CanceledError } from 'axios'

export function useGenres() {
    const [genres, setGenres] = useState<Genre[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState('')
    useEffect(() => {
        const abortController = new AbortController()
        setIsLoading(true)
        createApiService()
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
