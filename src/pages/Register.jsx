import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Register = () => {
  const { registerUser } = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault()

    const name = event.target.elements['name'].value
    const email = event.target.elements['email'].value
    const password1 = event.target.elements['password1'].value
    const password2 = event.target.elements['password2'].value

    if (password1 !== password2) {
      alert('Passwords are not identical')
      return
    }

    const registerInfo = { name, email, password1, password2 }

    registerUser(registerInfo)
  }
  return (
    <div className="container">
      <div className="login-register-container">
        <form onSubmit={handleSubmit}>
          <div className="form-field-wrapper">
            <label>Name:</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter name..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Email:</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter email..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Password:</label>
            <input
              type="password"
              name="password1"
              placeholder="Enter password..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="password2"
              placeholder="Confirm password..."
            />
          </div>

          <div className="form-field-wrapper">
            <input type="submit" value="Register" className="btn" />
          </div>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
