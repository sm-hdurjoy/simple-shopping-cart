// Library imports
import { useEffect } from "react";

export const useTitle = (title) => {
  // updating the tab title depending on which page the user is in
  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
  }, [title]);

  return null;
};
