import { Platform } from '@/model'
import { platformService } from '@/service/platformService'
import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'

export function usePlatforms() {
    const [platforms, setPlatforms] = useState<Platform[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const abortController = new AbortController()
        setIsLoading(true)
        platformService
            .getAll('/platforms/lists/parents', abortController.signal)
            .then((response) => {
                setPlatforms(response)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                console.error(err)
            })
    }, [])
    return { platforms, isLoading, error }
}
