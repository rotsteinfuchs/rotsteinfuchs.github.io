"use client";

import { useDiagonalScroll } from "@/hooks/useDiagonalScroll";
import { SocialLinks } from "@/components/SocialLinks";
import { useHeadingUnderline } from "@/hooks/useHeadingUnderline";
import "@/hooks/useHeadingUnderline.module.css";
import styles from "./page.module.css";

export default function Home() {
  useDiagonalScroll();
  useHeadingUnderline();
  return (
    <div>
      <SocialLinks />
      <div id="content">
        <section>
          <div>
            <div id={styles.title}>
              <h1 className={styles.outline}> Hi, I&apos;m Rotsteinfuchs.</h1>
              <h1>
                Hi, I&apos;m{" "}
                <span className={styles.highlight}>Rotsteinfuchs</span>.
              </h1>
              <h1 className={styles.outline}> Hi, I&apos;m Rotsteinfuchs.</h1>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>About me</h2>
            <p>
              I&apos;m a 14-year-old developer and designer from Germany. I
              design websites using Figma and am currently expanding my skills
              with Next.js and React. Along the way, I&apos;ve gained experience
              with Tailwind and various programming languages such as Java,
              Python, and C++ for Arduino.
              <br />
              <br />
              Recently, I switched to Linux and I really don&apos;t regret it: I
              love its performance and customizability. When I&apos;m not
              coding, you&apos;ll often find me in the world of Minecraft —
              recording, animating and cutting cinematic shots, experimenting
              with command blocks, and developing data packs. I enjoy the
              challenge of working within creative constraints to solve problems
              in unique ways.
              <br />
              <br />
              Let&apos;s build something amazing together! 🚀
              <br />
              <small>(This text was partially generated using ChatGPT)</small>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
