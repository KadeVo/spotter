import { Login } from './pages/Login'
import { Home } from './pages/Home'
// import { UserProvider } from './lib/context/user'
// import { Navbar } from './components/Navbar'
import { Register } from './pages/Register'
import PrivateRoutes from './utils/PrivateRoutes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
