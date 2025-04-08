import { useEffect } from "react";

export function useDiagonalScroll() {
  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth > 768) {
        const scrollY = window.scrollY;
        const viewHeight = window.innerHeight;
        const viewWidth = window.innerWidth;
        const divElement = document.querySelector("div#content") as HTMLElement;
        if (divElement) {
          divElement.style.transform = `translateX(${
            0 - (scrollY / viewHeight) * (viewWidth / 3)
          }px)`;
        }
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
