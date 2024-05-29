import { gameService } from '@/api'
import { Game } from '@/types'
import { useQuery } from '@tanstack/react-query'

function useFetchGames(config?: any) {
    const { isLoading, error, data } = useQuery<Game[]>({
        queryKey: ['games', config],
        queryFn: () => fetchGames(config),
    })

    return {
        isLoading,
        error,
        data,
    }
}

async function fetchGames(config?: any) {
    const reponse = await gameService.findAll('/games', config ?? undefined)
    return reponse.results
}
export default useFetchGames
