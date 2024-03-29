import Login from './pages/Login'
import Home from './pages/Home'
import { AuthProvider } from './utils/AuthContext'
import { Navbar } from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
