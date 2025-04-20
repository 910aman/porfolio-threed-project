import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect } from "react";
import './index.css';


const Hero = () => {
  useEffect(() => {
    document.title = "Aman Chauhan - FrontEnd Developer Portfolio";
    document.querySelector('meta[name="description"]').setAttribute("content", "Welcome to the portfolio of Aman Chauhan, a passionate FrontEnd developer with 1 year of experience. Explore my projects, skills, and expertise in modern web technologies.");
    document.querySelector('meta[property="og:title"]').setAttribute("content", "Aman Chauhan - FrontEnd Developer Portfolio");
    document.querySelector('meta[property="og:description"]').setAttribute("content", "I'm Aman Chauhan, a Frontend Developer building sleek UIs with React, Next.js, TypeScript, TailwindCSS & Three.js. Check out my work and connect!");
  }, []);

  return (
    <section className={`relative w-full h-[100vh] mx-auto`}>
      <GradientBackground />
      <div className={`absolute inset-0 top-16 md:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="relative z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915EFF]'>Aman Chauhan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            &quot;Building Interactive and Dynamic<br />
            Web Experiences with React JS, React Native, Next JS, Angular, Android Studio, & Three.js&quot;
          </p>
        </div>
      </div>

      <div className="items-center justify-center w-full h-full hidden lg:flex">
        <ComputersCanvas />
      </div>

      <div className='absolute bottom-40 z-40 lg:bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>

      {/* Add the animated shape here with Tailwind CSS */}
      <div className="absolute right-0 top-2/3 transform -translate-y-1/2 mr-20">
        <div className="lg:hidden z-30 flex w-60 h-60 bg-gradient-to-br from-purple-700 to-gray-300 rounded-[72% 28% 55% 45% / 26% 90% 10% 74%] shadow-lg animate-shapeAnimation">
          <img
            src="./curve_profile.jpeg"
            alt="Curve Shape Profile Image"
            className="relative object-cover w-full h-full rounded-[72% 28% 55% 45% / 26% 90% 10% 74%] shadow-lg animate-shapeAnimation m-2"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;

const GradientBackground = () => {
  return (
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};