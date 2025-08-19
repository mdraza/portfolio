"use client";

import { projects } from "@/contents/projects";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";

export default function Home() {
  const limitedData = projects.slice(0, 6);
  return (
    <main>
      <Hero />
      <Projects
        bgColor="#f7f6ff"
        title="Featured Projects"
        data={limitedData}
      />

      <Newsletter />
    </main>
  );
}
