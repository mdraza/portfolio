"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { imagesData } from "@/contents/imageData";

function page() {
  return (
    <div>
      <motion.h1
        className="text-4xl font-bold mb-5 text-center pt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Achievement
      </motion.h1>
      <motion.p
        className="text-lg text-secondary text-center mx-3 max-w-5xl md:mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Successfully completed the industry-recognized certification courses,
        enhancing my expertise in frontend development, modern frameworks, and
        best coding practices. These certifications reflect my commitment to
        continuous learning, upskilling, and applying the latest technologies to
        real-world projects
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-3 md:gap-8 my-[80px] max-w-7xl md:mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {imagesData.map((img) => (
          <motion.article
            key={img.id}
            className="bg-white dark:bg-dark/50 rounded-lg border-2 border-blue-100 shadow hover:shadow-lg transition-all"
            variants={fadeInUp}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className=""
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* <motion.p
                      className="text-gray-600 dark:text-gray-300 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p> */}
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

export default page;
