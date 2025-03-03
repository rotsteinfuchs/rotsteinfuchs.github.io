import Image from "next/image";
import Link from "next/link";
import { useMouseMove } from "@/hooks/useMouseMove";
import styles from "./SocialLinks.module.css";

export function SocialLinks() {
  useMouseMove();
  return (
    <div id={styles.component}>
      <Link
        href="https://www.discord.com/channels/@rotsteinfuchs"
        target="_blank"
        title="My Discord account"
        style={{ "--color": "#7289DA" } as React.CSSProperties}
      >
        <Image
          src="discord-mark-invert.svg"
          alt="Discord Logo"
          width={75}
          height={75}
        />
      </Link>
      <Link
        href="https://www.github.com/rotsteinfuchs"
        target="_blank"
        title="My GitHub account"
        style={{ "--color": "#2DBA4E" } as React.CSSProperties}
      >
        <Image
          src="github-mark-invert.svg"
          alt="Github Logo"
          width={75}
          height={75}
        />
      </Link>
    </div>
  );
}
