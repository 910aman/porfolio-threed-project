/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { GmailIcon, WhatsappIcon } from './icons.jsx';
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const templateParams = {
    from_name: form.name,
    to_name: "Techy Digital",
    from_email: form.email,
    // to_email: "techydigital910@gmail.com",
    message: form.message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Getting errors", error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden h-auto`}>
      <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl  lg:w-1/2 h-fit'      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your E-Mail address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            disabled={form.email === '' || form.message === '' || form.name === '' ? true : false}
            className={` py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md  bg-tertiary  
              ${form.email === '' || form.message === '' || form.name === '' ? 'text-gray-400 shadow-xl cursor-not-allowed blur-[1px]' : 'text-white shadow-primary cursor-pointer'} `}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <div>
          <span className="flex w-full justify-center my-2 font-bold text-lg">OR</span>
          <div className="flex gap-4 flex-row md:flex-col">
            <Link to={'mailto:techydigital910@gmail.com'}
              className="w-full rounded-2xl border-2 border-white py-2 flex flex-wrap flex-row justify-center md:justify-start md:pl-2 lg:pl-5 select-none items-center gap-1 lg:gap-4">
              {/* <BiLogoGmail color={['#D93025', '#F4B400']} /> */}
              <GmailIcon />
              <span className="lg:text-lg md:text-base text-xs font-semibold md:flex hidden ">techydigital910@gmail.com</span>
            </Link>
            <Link to={"https://wa.me/+919104465871/?text=I%20have%20Inquiry%20for%20Web%20Development"}
              className="w-full rounded-2xl border-2 border-white py-2 flex flex-row justify-center md:justify-start md:pl-2 lg:pl-5 select-none items-center gap-1 lg:gap-4">
              <WhatsappIcon />
              <span className="lg:text-lg md:text-base text-xs font-semibold md:flex hidden ">+91 91044 65871</span>
            </Link>
          </div>
        </div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[1000px] xl:min-h-[500px] md:h-[500px] h-[250px] max-h-fit lg:w-1/2'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
