import { axiosInstance } from "../axiosConfig"



export const getTasksAPI = async () => {
    const response = await axiosInstance.get('/task')
    return response.data
}