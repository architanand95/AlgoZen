"use client"
import React from "react";
import ImageSection from "./ImageSection";
import AboutItems from "./AboutItems";
import About from "./About";



const AboutSection = () => {
  return (
    <section id="about">

      <div className="md:min-h-screen text-center">
        <h1 className="text-5xl font-montserrat md:p-20 p-10 mt-20 mx-auto text-white">About</h1>


        {/* contents */}
        <div className="grid lg:grid-cols-2 place-self-left grid-cols-1 ">


          {/* Left side Image */}
          <div className="flex  justify-left items-left md:my-10 my-5">
            <ImageSection />
          </div>

          {/* Right side contents */}
          <div className="grid grid-rows-1">

            {/* Some text about me */}
            <About />
            {/* 3 Items cards */}
            <AboutItems/>

          </div>

        </div>
      </div>

    </section>
  )
}

export default AboutSection