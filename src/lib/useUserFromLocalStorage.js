import { useEffect, useState } from "react";

export const useUserFromLocalStorage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const hasUser = JSON.parse(localStorage.getItem("gamestop_user"));
    if (hasUser?.id) {
      setUser(hasUser);
    }
  }, []);
  return user;
};
