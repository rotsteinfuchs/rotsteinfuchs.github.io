'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const viewHeight = window.innerHeight;
      const viewWidth = window.innerWidth;
      window.scrollTo((scrollY / viewHeight) * (viewWidth / 3), scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.underline);
            }, 500); // Offset by 0.5 seconds
          } else {
            entry.target.classList.remove(styles.underline);
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

  return (
    <div className={styles.page}>
      <section>
        <div>
          <div className={styles.title}>
            <h1 className={styles.outline}> Hi, I&apos;m Rotsteinfuchs. </h1>
            <h1> Hi, I&apos;m <span className={styles.highlight}>Rotsteinfuchs</span>. </h1>
            <h1 className={styles.outline}> Hi, I&apos;m Rotsteinfuchs. </h1>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>About me</h2>
          <p>
            I&apos;m a 14-year-old developer and designer from Germany. I design websites using Figma and am currently expanding my skills with Next.js and React. Along the way, I&apos;ve gained experience with Tailwind and various programming languages such as Java, Python, and C++ for Arduino.<br />
            <br />
            Recently, I switched to Linux and I really don&apos;t regret it: I love its performance and customizability. When I&apos;m not coding, you&apos;ll often find me in the world of Minecraft — recording, animating and cutting cinematic shots, experimenting with command blocks, and developing data packs. I enjoy the challenge of working within creative constraints to solve problems in unique ways.<br />
            <br />
            Let&apos;s build something amazing together! 🚀<br />
            <small>(This text was partially generated using ChatGPT)</small><br />
            <br />
            <a href="https://www.nextjs.org/">
              <Image
                src="/badge_nextjs.svg"
                alt="NextJS"
                width={98.75}
                height={28} />
            </a>
            <a href="https://react.dev/">
              <Image
                src="/badge_react.svg"
                alt="React"
                width={86.25}
                height={28} />
            </a>
            <a href="https://tailwindcss.com/">
              <Image
                src="/badge_tailwind.svg"
                alt="Tailwind"
                width={113}
                height={28} />
            </a><br />
          </p>
        </div>
      </section>
    </div>
  );
}
