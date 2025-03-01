"use client";

import { useDiagonalScroll } from "@/hooks/useDiagonalScroll";
import { useHeadingUnderline } from "@/hooks/useHeadingUnderline";
import { useMouseMove } from "@/hooks/useMouseMove";
import { SocialLinks } from "@/components/SocialLinks";
import { AboutMe } from "@/components/AboutMe";
import styles from "@/app/page.module.css";

export default function Home() {
  useDiagonalScroll();
  useHeadingUnderline();
  useMouseMove();
  return (
    <>
      <SocialLinks />
      <div className={styles.page}>
        <section>
          <div>
            <div className={styles.title}>
              <h1 className={styles.outline}> Hi, I&apos;m Rotsteinfuchs. </h1>
              <h1>
                {" "}
                Hi, I&apos;m{" "}
                <span className={styles.highlight}>Rotsteinfuchs</span>.{" "}
              </h1>
              <h1 className={styles.outline}> Hi, I&apos;m Rotsteinfuchs. </h1>
            </div>
          </div>
        </section>
        <AboutMe />
      </div>
    </>
  );
}
