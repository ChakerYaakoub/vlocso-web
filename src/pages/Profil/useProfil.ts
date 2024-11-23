import { useEffect, useState } from "react";
import { User } from "../../models/User";
import { logout, selectUserData } from "../../reducers/userReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export interface ProfilProps {}

export const useProfil = (props: ProfilProps) => {
  const userData = useSelector(selectUserData);
  console.log("userData" + userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = async () => {
    const result = await dispatch(logout() as any);
    // window.location.href = "/login";
    if (result.payload) {
      // window.location.href = "/login";
      navigate("/login");
    }
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    } else {
      setUser(null);
    }
  }, [userData]);

  return { ...props, user, onLogout };
};
