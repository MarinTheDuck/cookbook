import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Notebook from "./pages/Notebook";

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
      case "Notebook":
        return <Notebook />;
      default:
        return (
          // Select have user select login or register
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Cookbook</h1>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => setPage("Login")}
                  >
                    Login
                  </button>
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => setPage("Register")}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
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
