import { Home } from "../pages";
import { ChangePassword } from "../pages/ChangePassword/ChangePassword";
import CreateAnnonce from "../pages/CreateAnnonce/CreateAnnonce";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import { Login } from "../pages/Login/Login";
import MesAnnonces from "../pages/MesAnnonces/MesAnnonces";
import NotFound404 from "../pages/NotFound404/NotFound404";
import Profil from "../pages/Profil/Profil";
import Register from "../pages/Register/Register";
import RelaunchAnnonce from "../pages/RelaunchAnnonce/RelaunchAnnonce";

// private: true si la route est protégée par un authentification
// private: false si la route n'est pas protégée par un authentification

const appRoutes = [
  { path: "/", element: <Home />, private: false },
  { path: "/Login", element: <Login />, private: false },
  { path: "/forgot-password", element: <ForgotPassword />, private: false },
  { path: "/change-password", element: <ChangePassword />, private: false },
  { path: "/register", element: <Register />, private: false },
  { path: "/profil", element: <Profil />, private: true },
  { path: "/mes-annonces", element: <MesAnnonces />, private: true },
  {
    path: "/mes-annonces/create-annonce",
    element: <CreateAnnonce />,
    private: true,
  },
  {
    path: "/mes-annonces/relaunch-annonce",
    element: <RelaunchAnnonce />,
    private: true,
  },

  { path: "*", element: <NotFound404 /> },
];

export default appRoutes;
