import { GrAscend, GrDescend } from 'react-icons/gr'
import { Badge } from './ui/badge'

function OrderBySelector() {
    return (
        <span className='flex justify-between items-center gap-2'>
            <span>
                <Badge>
                    <GrAscend />
                </Badge>
            </span>
            <span>
                <Badge>
                    <GrDescend />
                </Badge>
            </span>
        </span>
    )
}

export default OrderBySelector
