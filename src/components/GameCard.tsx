import { Game } from '@/types'
import PlatformIcons from './PlatformIcons'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
interface GameCardProps {
    game: Game
}
function GameCard({ game }: GameCardProps) {
    const platforms = game?.parent_platforms?.map((parent_platform) => parent_platform.platform)

    return (
        <Card className='w-[350px]'>
            <div className='overflow-hidden rounded-md'>
                <img
                    src={game.background_image}
                    alt={game.name}
                    className='object-cover h-52 w-[100%]'
                />
            </div>
            <CardContent className='mt-2'>
                <CardTitle className='text-lg'>{game.name}</CardTitle>
                <PlatformIcons platforms={platforms} />
            </CardContent>
            <CardFooter className='flex flex-col'>
                <div className='flex justify-between w-[100%]'>
                    <span>Rating</span>
                    <span className='font-bold text-md text-muted-foreground'>{game.rating}</span>
                </div>
                <div className='flex justify-between w-[100%]'>
                    <span>Released on</span>
                    <span className='text-md text-muted-foreground'>
                        {new Date(game.released).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}
                    </span>
                </div>
            </CardFooter>
        </Card>
    )
}

export default GameCard
