import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiResponse } from './ApiResponse'
import { axiosInstance } from '@/lib/axiosInstance'
export default class ApiService<T> {
    baseUrl: string = ''
    constructor() {}

    async findAll(endpoint: string, axiosConfigs?: AxiosRequestConfig): Promise<ApiResponse<T>> {
        try {
            const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(
                `${endpoint}`,
                axiosConfigs
            )
            return response.data
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`)
        }
    }

    async findById(endpoint: string, id: string | number): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axiosInstance.get(`${endpoint}/api/${id}`)
            return response.data
        } catch (error) {
            throw new Error(`Error fetching data: ${error}`)
        }
    }
}
