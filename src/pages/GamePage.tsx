import { lazy } from 'react'
import { useParams } from 'react-router-dom'

function GamePage() {
    const { id } = useParams()
    return (
        <div>
            <h1 className='font-normal'>Game # {id}</h1>
        </div>
    )
}

export const GamePageLazy = lazy(() => import('./GamePage'))

export default GamePage
