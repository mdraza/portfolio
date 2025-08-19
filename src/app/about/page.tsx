"use client";

import { techBknd, techList, tools } from "@/contents/techItem";
import { experiences } from "@/contents/textExp";
import {
  fadeIn,
  fadeInDown,
  fadeInUp,
  staggerContainer,
} from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { CgEditBlackPoint } from "react-icons/cg";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="pt-12">
      <motion.h1
        className="text-3xl md:text-4xl max-w-7xl mx-auto font-bold mb-5 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="md:text-lg px-5 md:px-3 text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building
          modern web applications. With a strong foundation in both frontend and
          backend technologies, I create seamless user experiences and robust
          server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16 bg-light-bg pt-[60px] pb-[80px] my-[80px]"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 px-5 py-7 rounded-lg shadow border-1 border-blue-100"
            variants={fadeInUp}
          >
            <div className="flex flex-col gap-0 items-center">
              <div className="w-[60px] h-[60px] flex items-center justify-center border-2 border-blue-100 rounded-full p-2">
                <FaCode className="h-8 w-8 text-primary inline-block" />
              </div>
              <h3 className="text-xl font-semibold my-2">Frontend</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-6">
              {techList.map((tech, index) => (
                <div
                  key={index}
                  className="flex gap-1 items-center border border-blue-100 p-2 rounded-full"
                >
                  <Image src={tech.src} alt={tech.alt} width={20} height={20} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 px-5 py-8 rounded-lg shadow border-1 border-blue-100"
            variants={fadeInUp}
          >
            <div className="flex flex-col gap-0 items-center">
              <div className="w-[60px] h-[60px] flex items-center justify-center border-2 border-blue-100 rounded-full p-2">
                <FaLaptopCode className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold my-2">Backend</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-6">
              {techBknd.map((tech, index) => (
                <div
                  key={index}
                  className="flex gap-1 items-center border border-blue-100 p-2 rounded-full"
                >
                  <Image src={tech.src} alt={tech.alt} width={20} height={20} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 px-5 py-8 rounded-lg shadow border-1 border-blue-100"
            variants={fadeInUp}
          >
            <div className="flex flex-col gap-0 items-center">
              <div className="w-[60px] h-[60px] flex items-center justify-center border-2 border-blue-100 rounded-full p-2">
                <FaGraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold my-2">Tools & Others</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-6">
              {tools.map((tech, index) => (
                <div
                  key={index}
                  className="flex gap-1 items-center border border-blue-100 p-2 rounded-full"
                >
                  <Image src={tech.src} alt={tech.alt} width={20} height={20} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-5xl mx-3 md:mx-auto flex gap-5 flex-col"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow border-1 border-blue-100"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-primary mb-2">
                {exp.company} • {exp.duration}
              </p>
              <div className="text-secondary list-disc list-inside space-y-2">
                {exp.responsibilities.map((res, index) => (
                  <p className="flex gap-2 items-center" key={index}>
                    <CgEditBlackPoint className="" />
                    {res}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="bg-light-bg pt-[60px] pb-[80px] mt-[80px]"
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-5xl mx-3 md:mx-auto flex flex-col gap-5"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow border-1 border-blue-100"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Computer Application
            </h3>
            <p className="text-primary mb-2">Amity University </p>
            <p className="text-secondary">
              Graduated in BCA from Amity University — built expertise in
              software development, databases, and web technologies.
            </p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow border-1 border-blue-100"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-2">
              Diploma in Computer Science
            </h3>
            <p className="text-primary mb-2">Ai-Kabir Polytechnic</p>
            <p className="text-secondary">
              Completed Diploma in Computer Science from Al-Kabir Polytechnic,
              with a strong foundation in programming, software development, and
              computer systems
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
