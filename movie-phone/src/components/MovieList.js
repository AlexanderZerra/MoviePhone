import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadMovies } from '../store/action/MovieAction'
import { Link } from 'react-router-dom'
import { POSTER_PATH } from '../globals'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapActionsToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <div>
      {props.movieState.movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <p>{movie.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(Movies)
