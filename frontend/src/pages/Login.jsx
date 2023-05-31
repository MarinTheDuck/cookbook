import { useContext, useState } from "react";
import { GlobalContext } from "../App";
import "./Login.css";

const Login = () => {
  const { username, setUsername, setToken, setPage } = useContext(GlobalContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;

        // Check if the token exists
        if (!token) {
          setError("Invalid username or password");
          return;
        }

        // Save the token to local storage
        localStorage.setItem("token", token);

        // Set the token in the global context
        setToken(token);

        // Redirect to the home page or any other page you desire
        setPage("Home");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login");
    }
  };

  return (
    <div className="container mt-2">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Log in</h2>
          <p>
            Log in to your account to view your recipes and add new ones.
          </p>
        </div>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div className="card mb-5">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                <i className="bi bi-person"></i>
              </div>
              <form className="text-center" method="post">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-block w-100"
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
                <p className="text-muted">Don&apos;t have an account?</p>
                <button
                  className="btn btn-secondary d-block w-100 mb-3"
                  type="button"
                  onClick={() => setPage("Register")}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;