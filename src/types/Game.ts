import { Genre } from './Genre'
import { Platform } from './Platform'
import { Rating } from './Rating'

export interface Game {
    id: number
    slug: string
    name: string
    released: Date
    tba: boolean
    background_image: string
    rating: number
    reviews_count: number
    ratings: Rating[]
    genres: Genre[]
    parent_platforms: [
        {
            platform: Platform
        }
    ]
}
