import { useContext, useState } from "react";
import { GlobalContext } from "../App";

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
    <div className="container">
      <button className="btn btn-secondary" onClick={() => setPage("Register")}>
        Go to Register page
      </button>
      <br />
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
