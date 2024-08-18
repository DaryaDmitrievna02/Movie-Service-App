import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/home'
import { MoviePage } from './pages/moviePage/moviePage'
import { Header } from './components/header/header'
import { Search } from './pages/search/searchPage'
import { MovieNotFound } from './components/errors/moviesNotFound'

function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Header />}>
  <Route path="/movies" element={<Home></Home>}></Route>
  <Route path="/search" element={<Search/>}></Route>
  <Route path="/movie/:id" element={<MoviePage />} />
  <Route path='/movie/*' element={<MovieNotFound></MovieNotFound>}></Route>
  
  <Route path='*' element={<MovieNotFound></MovieNotFound>}></Route>
  </Route>
</Routes>
    </>
  )
}

export default App
