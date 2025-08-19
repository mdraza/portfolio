"use client";

import { motion } from "framer-motion";
import Projects from "../components/Projects";
import { projects } from "@/contents/projects";

export default function Page() {
  return (
    <div className="py-0">
      <motion.h1
        className="text-4xl font-bold mb-5 text-center pt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-lg text-secondary -mb-15 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are some of my recent projects. Click on the links to view the code
        or live demo.
      </motion.p>
      <Projects bgColor="#ffffff" title="" data={projects} />
    </div>
  );
}
