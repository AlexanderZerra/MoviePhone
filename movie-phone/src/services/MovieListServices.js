import Client from './index'
import { axiosConfig } from '../globals'

export const GetMovies = async () => {
  try {
    const res = await Client.get('/discover/movie', axiosConfig)
    console.log(res.data.results)
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMoviesById = async (id) => {
  try {
    const res = await Client.get(`/movie/${id}`, axiosConfig)
    console.log(res)
    return res.data
  } catch (error) {
    throw error
  }
}
