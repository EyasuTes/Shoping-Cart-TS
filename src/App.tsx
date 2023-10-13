import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Nav  from './components/Nav.tsx'
function App() {
 

  return (
    <>
      <Nav></Nav>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Container>
      
    </>
  )
}

export default App
