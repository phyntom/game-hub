import { Game } from '../model'
import { ApiService } from './apiService'

export const gameService = new ApiService<Game>()
