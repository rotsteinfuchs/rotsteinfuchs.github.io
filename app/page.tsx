"use client";

import { useDiagonalScroll } from "@/hooks/useDiagonalScroll";
import { SocialLinks } from "@/components/SocialLinks";
import { Title } from "@/components/sections/Title";
import { AboutMe } from "@/components/sections/AboutMe";

export default function Home() {
  useDiagonalScroll();
  return (
    <div>
      <SocialLinks />
      <div>
        <Title />
        <AboutMe />
      </div>
    </div>
  );
}
