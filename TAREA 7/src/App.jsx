import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/home'
import User from './pages/user'
import Users from './pages/users'
import NotFound from './pages/error/notFound'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <div className='inicio'>
      <div>
        <h1>Bienvenido la página de Rick and Morty</h1>
      </div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user/:id' element={<User />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App