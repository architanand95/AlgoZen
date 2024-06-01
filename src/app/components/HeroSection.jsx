"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="lg:py-16 min-h-screen flex items-center justify-center relative"
    >
      <div className="flex flex-col lg:flex-row w-full items-center justify-between">
        <motion.div
          cascade
          direction="up"
          duration={600}
          triggerOnce
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6.5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-secondary-100">
              Hey guys,
            </span>
            <br />
            <TypeAnimation
              sequence={["Welcome to AlgoZen"]}
              wrapper="span"
              speed={50} />
          </h1>
          <div>
            <a
              href="https://architanand95.github.io/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-100 to-secondary-50 hover:bg-slate-800 text-white mt-5"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 cursor-pointer">
                Check out my official website
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 mt-4 lg:mt-0 flex justify-center lg:justify-end"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={700}
              height={700}
              showcursor={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
