import { useUser } from '../lib/context/user'

export function Navbar() {
  const user = useUser()

  return (
    <nav>
      <a href="/">Spotter</a>
      <div>
        {user.current ? (
          <>
            <span>{user.current.email}</span>
            <button type="button" onClick={() => user.logout()}>
              Logout
            </button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  )
}
