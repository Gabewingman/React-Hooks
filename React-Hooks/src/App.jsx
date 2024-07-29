import { Routes, Route } from 'react-router-dom'
import './App.css'
import UseState from './components/useState'

function App() {
   return (
    <>
    
    <Routes>
      <Route path='/' element={<UseState />} />
    </Routes>

    </>
   )
}

export default App
