import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import appRoutes from "./Routes/appRoutes";
import { Header } from "./components";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./Routes/PrivateRoute";
import { useEffect, useState } from "react";
import { LoadingProvider } from "./context/LoadingContext"; // Import LoadingProvider

// json-server --watch src/Dummy/db.json
function App() {
  // test alert

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken);
    console.log("isLoggedIn", isLoggedIn);
  }, [localStorage.getItem("accessToken"), isLoggedIn]);

  return (
    <div className="App " id="App">
      {/* Ensure that all components using useAlert are within this provider */}
      <Router>
        <Header isLoggedIn={isLoggedIn} />
        {/* <ToTopScrollTo /> */}
        <div className="main">
          <LoadingProvider>
            <Routes>
              {appRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.private ? (
                      <PrivateRoute>{route.element}</PrivateRoute>
                    ) : (
                      route.element
                    )
                  }
                />
              ))}
            </Routes>
          </LoadingProvider>
        </div>
        <Footer />
        {/* {isLoggedIn ? <div>Welcome back!</div> : <div>Please log in.</div>} */}
      </Router>
    </div>
  );
}

export default App;
