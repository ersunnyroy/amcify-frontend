import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../config/axios"

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Add the default class to the body
    document.body.classList.add("login-page", "bg-body-secondary")

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove("login-page", "bg-body-secondary")
    }
  }, [])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const onLogin = async (e) => {
    e.preventDefault()
    // // Navigate to the dashboard after successful login
    // navigate("/dashboard", { replace: true })
    try {
      const response = await api.post("login", {
        email: email,
        password: password,
      })

      if (response.status) {
        // Assuming the API response contains a token and user data
        const { data } = response.data

        // Store the token and user in localStorage (or context, depending on your app structure)
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))

        // Redirect to the dashboard or another protected route
        navigate("/dashboard")
      } else {
        setError(response.message)
      }
    } catch (err) {
      setError("Invalid email or password")
      setShowToast(true)
    }
  }

  const handleCloseToast = () => {
    setError(null); // Clear the error message
  };

  return (
    <>
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header">
            <a
              href=""
              className="link-dark text-center link-offset-2 link-opacity-100 link-opacity-50-hover"
            >
              <h1 className="mb-0">
                AMC<b>ify</b>
              </h1>
            </a>
          </div>
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <p className={`alert alert-danger ${error ? 'show' : 'd-none'}`}>{error}</p>
            <form onSubmit={onLogin} method="post">
              <div className="input-group mb-1">
                <div className="form-floating">
                  <input
                    id="loginEmail"
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="loginEmail">Email</label>
                </div>
                <div className="input-group-text">
                  <span className="bi bi-envelope" />
                </div>
              </div>
              <div className="input-group mb-1">
                <div className="form-floating">
                  <input
                    id="loginPassword"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                  <label htmlFor="loginPassword">Password</label>
                </div>
                <div className="input-group-text">
                  <span className="bi bi-lock-fill" />
                </div>
              </div>
              {/*begin::Row*/}
              <div className="row">
                <div className="col-8 d-inline-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </div>
                {/* /.col */}
              </div>
              {/*end::Row*/}
            </form>

            <p className="mb-1">
              <a href="">I forgot my password</a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </>
  )
}

export default Login