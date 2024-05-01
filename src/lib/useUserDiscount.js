import { useEffect, useState } from "react";

export const useUserDiscount = (user) => {
  const [hasDiscount, setHasDiscount] = useState({});

  useEffect(() => {
    if (user?.is_flamengo || user?.watch_one_piece || user?.is_from_sousa) {
      return setHasDiscount(true);
    } else {
      return setHasDiscount(false);
    }
  }, [user]);

  return hasDiscount;
};
