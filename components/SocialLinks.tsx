import Link from "next/link";
import { useMouseMove } from "@/hooks/useMouseMove";
import DiscordLogo from "@/components/DiscordLogo";
import GithubLogo from "@/components/GithubLogo";
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
        <DiscordLogo />
      </Link>
      <Link
        href="https://www.github.com/rotsteinfuchs"
        target="_blank"
        title="My GitHub account"
        style={{ "--color": "#2DBA4E" } as React.CSSProperties}
      >
        <GithubLogo />
      </Link>
    </div>
  );
}
