import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Returns a function that navigates to a section on the homepage.
 * - If already on "/", smooth-scrolls directly.
 * - Otherwise, navigates to "/" first, then scrolls after render.
 */
export const useNavigateToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (sectionId: string) => {
      if (location.pathname === "/") {
        // Already on homepage — just scroll
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to homepage, then scroll after render
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    },
    [location.pathname, navigate]
  );
};
