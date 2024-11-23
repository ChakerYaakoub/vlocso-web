import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
import appRoutes from "./Routes/appRoutes";
import { Header } from "./components";
import Footer from "./components/Footer/Footer";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "./reducers/userReducer";
import PrivateRoute from "./Routes/PrivateRoute";
import { useEffect, useState } from "react";

// json-server --watch src/Dummy/db.json
function App() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken);
    console.log("isLoggedIn", isLoggedIn);
  }, [localStorage.getItem("accessToken"), isLoggedIn]);

  // const { pathname } = useLocation();

  //   // Scroll to top on route change
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn} />
        <div className="main">
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
        </div>

        <Footer />

        {/* {isLoggedIn ? <div>Welcome back!</div> : <div>Please log in.</div>} */}
      </Router>
    </div>
  );
}

export default App;
