"use client";

import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="pt-[50px]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="flex justify-center items-center mb-4"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full mb-4 object-cover ring-2 ring-primary"
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl text-secondary font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Muhammad Rajaullah Ansari
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-[20px] text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer | React Developer | Next JS Developer | UI/UX
            Enthusiast
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/mdraza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] flex items-center justify-center text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors border-2 border-[#c9c9ff] p-2 rounded-full hover:border-primary"
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/md-rajaullah-ansari-80895a17a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] flex items-center justify-center text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors border-2 border-[#c9c9ff] p-2 rounded-full hover:border-primary"
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://x.com/MuhammadRa80810"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] flex items-center justify-center text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors border-2 border-[#c9c9ff] p-2 rounded-full hover:border-primary"
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="text-2xl" />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div>
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div>
              <Link
                href="/contact"
                className=" inline-block w-full bg-secondary text-white  md:w-auto dark:text-white px-8 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
