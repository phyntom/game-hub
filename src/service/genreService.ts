import { Genre } from '../model'
import { ApiService } from './apiService'

export const genreService = new ApiService<Genre>()
