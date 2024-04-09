import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cadastrar_usuario from './components/cadastrar_usuarios'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
            <Routes>
                <Route path="/user" element={<Cadastrar_usuario/>} />
            </Routes>
    </Router>
    
  )
}

export default App
