/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { technologies_1, testimonials } from "../constants";
import { Tilt } from "react-tilt";
import { BallCanvas } from "./canvas";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  // company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-black-200 lg:p-10 p-5 rounded-3xl xs:w-[320px] w-full'>
      <p className='text-white font-black text-[48px]'>&quot;</p>

    <div className='mt-1'>
        <p className='text-white lg:tracking-wider flex-wrap tracking-normal text-[18px] blur-sm'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px] blur-sm'>
              <span className='blue-text-gradient'>@</span> John Doe
          </p>
            <p className='mt-1 text-secondary text-[12px] blur-sm'>
              {designation} of XYZ
          </p>
        </div>

        <img
          src={image}
            alt={`blog_by-${name}`}
            className='w-10 h-10 rounded-full object-cover blur-sm'
        />
      </div>
      </div>
    </Tilt>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] `}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Here&apos;s My Blogs</p>
          <h2 className={styles.sectionHeadText}>All Blogs.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      <Tech_1 />
    </div>
  );
};

export default SectionWrapper(Feedbacks, "blogs");

const Tech_1 = () => (
  <div>
    {
      technologies_1.map((technology) => (
        <div className='md:w-40 md:h-40 w-28 h-28' key={technology.name} title={technology.title}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
  </div>
)