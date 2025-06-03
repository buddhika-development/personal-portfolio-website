import React from "react";
import ContactMeSection from "./ContactMeSection";
import GradientBackgroundRound from "../ui/GradientBackgroundRound";
import { div } from "motion/react-client";

const HeroSection = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex items-center justify-center absolute">
        <div
          className="p-6 w-full h-full flex items-center
                    lg:w-10/12 lg:gap-4"
        >
          {/* Name and welcome section */}
          <div className="z-20 lg:w-6/10">
            <h2
              className="text-center sub-title bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent
                          md:text-2xl
                          lg:text-left lg:w-fit
            "
            >
              Hello! I am
            </h2>
            <h1
              className="title text-5xl text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent
                          md:text-7xl
                          lg:text-left lg:text-8xl
            "
            >
              Buddhika Madusanka
            </h1>
            <p
              className="text-[14px] text-center text-zinc-400 mt-4
                          md:text-[18px] md:w-10/12 md:mx-auto
                          lg:text-left lg:w-5/6 lg:mx-0
            "
            >
              I am a passionate Full Stack Developer with a strong interest in
              Al and Data Science. Open to new opportunities, I thrive on
              building smart,scalable solutions and continuously exploring the
              evolving world of technology.
            </p>

            {/* contantct section */}
            <div
              className="flex items-center justify-center
                            lg:justify-start
            "
            >
              <ContactMeSection />
            </div>
          </div>

          {/* image section */}
          <div
            className="hidden
                          lg:block lg:w-4/10"
          >
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quidem cum ullam. Fugiat accusamus officiis, dolores facere sapiente
            culpa quo debitis perferendis ad molestias. Aperiam dolorum
            architecto consequuntur dolorem perspiciatis! */}
          </div>
        </div>
      </div>

      {/* gradient section */}
      <div className="relative w-[900px] h-[900px] top-[-400] left-[-400]
                      lg:w-[1800px] lg:h-[1800px] lg:top-[-600] lg:left-[-600]
      "
      >
        <GradientBackgroundRound />
      </div>
    </div>
  );
};

export default HeroSection;
