"use client";

import { Project } from "@/types";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectProps = {
  bgColor: string;
  title: string;
  data: Project[];
};

export default function Projects(props: ProjectProps) {
  return (
    <section className={`mt-[80px] pt-[60px] pb-[80px] bg-[#f7f6ff]`}>
      <div className="container max-w-7xl mx-auto px-4">
        {props.title && (
          <motion.h2
            className="text-3xl text-secondary font-bold mb-12 text-center"
            {...fadeInUp}
          >
            {props.title}
          </motion.h2>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {props.data.map((project) => (
            <motion.article
              key={project.title}
              className="bg-white dark:bg-dark/50 rounded-lg border-2 border-blue-100 shadow hover:shadow-lg transition-all p-6"
              variants={fadeInUp}
              // {...cardHoverSmall}
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
            >
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <motion.h3
                className="text-xl font-semibold mb-2 text-secondary"
                // whileHover={{ x: 5 }}
                // transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="p-2 bg-blue-50 rounded-full text-sm"
                    // whileHover={{ scale: 1.1 }}
                    // whileTap={{ scale: 0.95 }}
                  >
                    {/* {tech} */}
                    <Image
                      src={`/${tech}`}
                      alt="tech logo"
                      width={30}
                      height={30}
                      className="w-[25px] h-[25px]"
                    />
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  // whileHover={{ x: 5 }}
                  // whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  // whileHover={{ x: 5 }}
                  // whileTap={{ scale: 0.95 }}
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
