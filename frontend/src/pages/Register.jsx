import { useContext, useState } from "react";
import { GlobalContext } from "../App";

const Register = () => {
  const { username, setUsername, setToken, setPage } =
    useContext(GlobalContext);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
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

        // Set the page to "home" in the global context
        setPage("Home");

      } else {
        setError("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Error during registration");
    }
  };

  return (
    <div className="container">
      <button
        className="btn btn-secondary"
        onClick={() => setPage("Login")}
      >
        Go to Login page
      </button>
      <br />
      <h2>Register</h2>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
