import { motion } from "framer-motion";
import SavingsTool from "./SavingsTool";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`} 
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-hero-gradient" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            INSYCS <span className="text-[#74c0fc]">Insurance</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            The insurance company of the people <br className="sm:block hidden" />
            Providing insurance where it is inaccessible
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-10 flex justify-center items-end h-1/2">
        <SavingsTool />
      </div>

      <div className="absolute xs:bottom-22 bottom-24 w-full flex justify-center items-center">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white opacity-40 flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;