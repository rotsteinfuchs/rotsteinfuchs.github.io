import { useEffect } from "react";

export function useDiagonalScroll() {
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const viewHeight = window.innerHeight;
      const viewWidth = window.innerWidth;
      const divElement = document.querySelector("body > div") as HTMLElement;
      if (divElement) {
        divElement.style.transform = `translate(${
          0 - (scrollY / viewHeight) * (viewWidth / 3)
        }px, 0)`;
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
}
