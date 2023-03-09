import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title || "Loading..."} - Shopping Cart`;
  }, [title]);
  return null;
};
