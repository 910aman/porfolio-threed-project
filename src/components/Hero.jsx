import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect } from "react";
import './index.css'

const Hero = () => {
  useEffect(() => {
    document.title = "Aman Chauhan - FrontEnd Developer Portfolio";
    document.querySelector('meta[name="description"]').setAttribute("content", "Welcome to the portfolio of Aman Chauhan, a passionate FrontEnd developer with 1 year of experience. Explore my projects, skills, and expertise in modern web technologies.");
    document.querySelector('meta[property="og:title"]').setAttribute("content", "Aman Chauhan - FrontEnd Developer Portfolio");
    document.querySelector('meta[property="og:description"]').setAttribute("content", "Discover the work of Aman Chauhan, a FrontEnd developer specializing in UI design with ReactJS, NextJS, Typescript, TailwindCSS, Three.js for animated canvases, and more. Check out my projects and get in touch!");
  }, []);

  return (
    <section className={`relative w-full h-[100vh] mx-auto`}>
      <GradientBackground />
      <div className={`absolute inset-0 top-16 md:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915EFF]'>Aman Chauhan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            &quot;Building Interactive and Dynamic<br />
            Web Experiences with React & Three.js&quot;
          </p>
        </div>
      </div>

      {/* <div className="flex items-center justify-center w-full" style={{ height: `calc(100vh - 120px)` }}> */}
      {/* <div className="h-lvh md:w-[90lvw] w-[400px] mt-40 absolute flex"> */}
      <div className="items-center justify-center w-full h-full hidden lg:flex" >
        <ComputersCanvas />
      </div>

      <div className='absolute bottom-28 lg:bottom-20 w-full flex justify-center items-center'>
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
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
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
  )
}
