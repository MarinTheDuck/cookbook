import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

export const GlobalContext = createContext();

const App = () => {
  const [page, setPage] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  // Define the context values
  const contextValues = {
    username,
    setUsername,
    token,
    setToken,
    setPage,
  };

  // Render the appropriate page based on the current value of "page"
  const renderPage = () => {
    switch (page) {
      case "Login":
        return <Login />;
      case "Register":
        return <Register />;
      case "Home":
        return <Home />;
      case "Recipe":
        return <Recipe />;
      default:
        return (
          <section className="py-4 py-xl-5">
            <div className="container">
              <div className="text-center p-4 p-lg-5">
                <p className="fw-bold text-primary mb-2">Cookbook</p>
                <h1 className="fw-bold mb-4">Welcome!</h1>
                <button
                  type="button"
                  className="btn btn-primary fs-5 me-2 py-2 px-4"
                  onClick={() => setPage("Login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-secondary fs-5 me-2 py-2 px-4"
                  onClick={() => setPage("Register")}
                >
                  Register
                </button>
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <GlobalContext.Provider value={contextValues}>
      <div className="container-fluid">{renderPage()}</div>
    </GlobalContext.Provider>
  );
};

export default App;
