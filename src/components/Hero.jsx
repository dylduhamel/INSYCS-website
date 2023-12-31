import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Hero = () => {
  // Animation Variants
  const divVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <motion.div
        className="px-6 py-16 absolute inset-0 lg:bottom-[80px] max-w-7xl mx-auto flex flex-col justify-center items-center z-10 pointer-events-none md2:flex-row"
        initial="hidden"
        animate="visible"
        variants={divVariants}
      >
        {/* Combined Inner div 1 and 2 */}
        <div className="flex-grow flex flex-row items-center">
          {/* Gradient Line */}
          <div className="hidden md:flex flex-col justify-center items-center mr-5">
            <div className="w-5 h-5 rounded-full bg-hero-gradient" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className={`${styles.heroHeadText} text-white text-2xl`}>
              INSYCS <span className="text-[#74c0fc]">Insurance</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 md:text-lg text-sm`}
            >
              The insurance company of the people
              <br />
              Providing insurance where it is inaccessible
            </p>
          </div>
        </div>

        {/* Inner div 3 */}
        <div className="flex-grow md:max-w-[50%] w-full">
          <img
            src="./images/house2.png"
            alt="hero"
            className="w-full md:w-autow-3/4 lg:w-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
