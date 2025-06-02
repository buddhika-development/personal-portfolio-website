import React from "react";
import ContactMeSection from "./ContactMeSection";
import GradientBackgroundRound from "../ui/GradientBackgroundRound";
import { div } from "motion/react-client";

const HeroSection = () => {
  return (

    <div className="w-full h-full">    
      <div className="flex w-full h-full justify-center items-center absolute">
        
        <div className="w-10/12 flex h-full gap-10 justify-center items-center">
          <div className="w-6/10 flex flex-col justify-center">
            <h1 className="w-fit sub-title text-3xl font-semibold bg-gradient-to-r from-zinc-400 to-zinc-700 bg-clip-text text-transparent">Hello! I am</h1>
            <h1 className="title text-8xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Buddhika Madusanka</h1>
            <p className="mt-5 w-5/6 text-zinc-300">I am a passionate Full Stack Developer with a strong interest in AI and Data Science. Open to new opportunities, I thrive on building smart, scalable solutions and continuously exploring the evolving world of technology.</p>

            {/* contact and social media following call to actions */}
            <ContactMeSection />
          </div>

          <div className="w-4/10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptate, necessitatibus labore laborum odit esse. Accusamus ullam quisquam esse explicabo est eius voluptates? Quasi rerum voluptate labore ducimus praesentium sequi.
          </div>
        </div>
      </div>

      <div className="relative left-[-500] top-[-700]">
        <GradientBackgroundRound />
      </div>
    </div>
  );
};

export default HeroSection;
