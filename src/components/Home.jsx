// import { About, Contact, Feedbacks, Hero, Tech, Works, StarsCanvas } from "./components";

import About from "./About"
import { StarsCanvas } from "./canvas"
import Contact from "./Contact"
import Feedbacks from "./Feedbacks"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Tech from "./Tech"
import Works from "./Works"

function Home() {
    return (
        <>
            <div className='fixed top-0 -z-10 h-full w-full'>
                <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    {/* <div className="relative h-full w-full bg-slate-900"> */}
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
                    </div>
                </div>
            </div>

            <Navbar />
            <Hero />
            <About />
            {/* <Experience /> */}
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </>
    )
}

export default Home