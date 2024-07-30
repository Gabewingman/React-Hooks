import { Routes, Route } from 'react-router-dom'
import UseState from './components/useState'
import UseEffect from './components/useEffect'
import './App.css'

function App() {
   return (
    <>
    
    <Routes>
      <Route path='/' element={<UseState />} />
      <Route path='/useEffect' element={<UseEffect />} />
    </Routes>

    </>
   )
}

export default App
