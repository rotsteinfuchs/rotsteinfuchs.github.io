import { useEffect } from "react";

export function useDiagonalScroll() {
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const viewHeight = window.innerHeight;
      const viewWidth = window.innerWidth;
      window.scrollTo((scrollY / viewHeight) * (viewWidth / 3), scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
}
