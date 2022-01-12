import './styles/App.css'
import React from 'react'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Movie Phone</h1>
      <Routes>
        <Route path="/home" element={<MovieList />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App
