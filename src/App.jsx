import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Header from './components/Header'
import Shows from './components/Shows'
function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shows' element={<Shows/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
