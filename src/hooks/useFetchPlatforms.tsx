import { platformService } from '@/api'
import { Platform } from '@/types'
import { useQuery } from '@tanstack/react-query'
function useFetchPlatforms(config?: any) {
    const { isLoading, error, data } = useQuery<Platform[]>({
        queryKey: ['platforms'],
        queryFn: () => fetchPlatforms(config),
    })

    return {
        isLoading,
        error,
        data,
    }
}

async function fetchPlatforms(config?: any) {
    const reponse = await platformService.findAll('/platforms/lists/parents', config ?? undefined)
    return reponse.results
}

export default useFetchPlatforms
