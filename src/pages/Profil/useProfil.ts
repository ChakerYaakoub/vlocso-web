import { useEffect, useState } from "react";
import { User } from "../../models/User";
import { logout, selectUserData } from "../../reducers/userReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export interface ProfilProps {}

export const useProfil = (props: ProfilProps) => {
  const userData = useSelector(selectUserData);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const onLogout = async () => {
    setLoading(true);
    const result = await dispatch(logout() as any);
    // window.location.href = "/login";

    if (result.payload) {
      window.location.href = "/login";
      // navigate("/login");
    }
    setLoading(false);
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    } else {
      setUser(null);
    }
  }, [userData]);

  return { ...props, user, loading, onLogout };
};
