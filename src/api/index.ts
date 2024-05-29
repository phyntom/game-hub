import ApiService from './ApiService'
import { Game, Platform } from '@/types'

export const gameService = new ApiService<Game>()
export const platformService = new ApiService<Platform>()
