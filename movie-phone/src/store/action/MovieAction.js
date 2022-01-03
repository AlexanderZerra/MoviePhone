import { GET_MOVIES } from '../types'
import { GetMovies, GetMoviesById } from '../../services/MovieListServices'
import { GET_DETAILS } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()
      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadDetails = (id) => {
  return async (dispatch) => {
    try {
      const details = await GetMoviesById(id)
      console.log(details)
      dispatch({
        type: GET_DETAILS,
        payload: details
      })
    } catch (error) {
      throw error
    }
  }
}
