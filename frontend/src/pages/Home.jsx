import { useContext } from "react";
import { GlobalContext } from "../App";

const Home = () => {
  const { username, setUsername, setToken, setPage, token } =
    useContext(GlobalContext);

  const handleLogout = () => {
    // Perform logout logic, e.g., clear token from local storage
    token && localStorage.removeItem("token");

    // Clear the username and token in the global context
    setUsername("");
    setToken("");

    // Change the page to Login or any other page you desire
    setPage("");
  };

  return (
    <div className="container">
        <h2>Home</h2>
        <p>Welcome, {username}!</p>
        <button className="btn btn-primary" onClick={handleLogout}>
            Logout
        </button>
    </div>
  );
};

export default Home;
