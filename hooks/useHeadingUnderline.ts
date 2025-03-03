import { useEffect } from "react";
import styles from "./useHeadingUnderline.module.css";

export function useHeadingUnderline() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.underline_active);
            }, 500); // Offset by 0.5 seconds
          } else {
            entry.target.classList.remove(styles.underline_active);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold for visibility sensitivity
    );

    const headings = document.querySelectorAll("h2");
    headings.forEach((h2) => observer.observe(h2));

    return () => {
      headings.forEach((h2) => observer.unobserve(h2));
    };
  }, []);
}
