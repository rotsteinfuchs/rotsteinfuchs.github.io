import { useEffect } from "react";

export function useMouseMove() {
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const mouseX = event.clientX + "px";
      const mouseY = event.clientY + "px";
      document.documentElement.style.setProperty("--mouse-x", mouseX);
      document.documentElement.style.setProperty("--mouse-y", mouseY);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}
