import { readSync } from "fs";
import { useCallback, useEffect, useState } from "react";

export const getUserQuery = () => {
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(0);
  const [list, setList] = useState<{}>();
  const [loading, setLoading] = useState(true);

  // personal HOOK
  const getPageUser = useCallback(async () => {
    setLoading(true);

    const res = await fetch(
      `https://653157a24d4c2e3f333cddf2.mockapi.io/users?page=${page}&limit=2`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const users = await res.json();
    setList(users);
    setLoading(false);
  }, [page, limit]);

  useEffect(() => {
    getPageUser();
  }, [page, limit]);

  return { page, setPage, getPageUser, list, loading, setLimit };
};
