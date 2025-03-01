import Image from "next/image";
import Link from "next/link";

export function AboutMe() {
  return (
    <section>
      <div>
        <h2>About me</h2>
        <p>
          I&apos;m a 14-year-old developer and designer from Germany. I design
          websites using Figma and am currently expanding my skills with Next.js
          and React. Along the way, I&apos;ve gained experience with Tailwind
          and various programming languages such as Java, Python, and C++ for
          Arduino.
          <br />
          <br />
          Recently, I switched to Linux and I really don&apos;t regret it: I
          love its performance and customizability. When I&apos;m not coding,
          you&apos;ll often find me in the world of Minecraft — recording,
          animating and cutting cinematic shots, experimenting with command
          blocks, and developing data packs. I enjoy the challenge of working
          within creative constraints to solve problems in unique ways.
          <br />
          <br />
          Let&apos;s build something amazing together! 🚀
          <br />
          <small>(This text was partially generated using ChatGPT)</small>
          <br />
          <br />
          <Link href="https://www.nextjs.org/">
            <Image
              src="/badge_nextjs.svg"
              alt="NextJS"
              width={98.75}
              height={28}
            />
          </Link>
          <Link href="https://react.dev/">
            <Image
              src="/badge_react.svg"
              alt="React"
              width={86.25}
              height={28}
            />
          </Link>
          <Link href="https://tailwindcss.com/">
            <Image
              src="/badge_tailwind.svg"
              alt="Tailwind"
              width={113}
              height={28}
            />
          </Link>
          <br />
        </p>
      </div>
    </section>
  );
}
