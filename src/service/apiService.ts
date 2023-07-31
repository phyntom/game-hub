import { AxiosResponse } from 'axios'
import { axiosInstance } from './axiosInstance'
import { Game } from '../model'

export interface RawgApiResponse<T> {
    count: number
    next: string
    previous: string
    results: T[]
}

export class ApiService<T> {
    constructor() {}
    async getAll(endpoint: string, abortSignal: AbortSignal): Promise<T[]> {
        try {
            const response: AxiosResponse<RawgApiResponse<T>> = await axiosInstance.get(endpoint, {
                signal: abortSignal,
            })
            return response.data.results
        } catch (err) {
            console.error(err)
            throw err
        }
    }
    async getOne(endpoint: string, id: string): Promise<T | undefined> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.get(`${endpoint}/${id}`)
            return response.data
        } catch (err) {
            console.error(err)
            throw err
        }
    }
}

export const createApiService = () => new ApiService<Game>()
