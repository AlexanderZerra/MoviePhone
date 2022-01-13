import './styles/App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<MovieList />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  )
}

export default App
