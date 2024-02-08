import { Home } from './pages/Home'
import { UserProvider } from './lib/context/user'

function App() {
  const isLoginPage = window.location.pathname === '/login'

  return (
    <div>
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  )
}

export default App
