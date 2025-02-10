import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
            I am 14-year-old developer and designer from Germany.<br />
            I like creating websites, and I&apos;m currently learning<br />
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
            I&apos;m currently creating a Minecraft trailer video for <a href="https://www.mctorn.de/">MCTorn</a>.<br />
            Sometimes I use Python and Java or C++ for my Arduino.
          </p>
        </div>
      </section>
    </div>
  );
}
