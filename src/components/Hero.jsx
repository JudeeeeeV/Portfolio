import portraitLight from '../assets/resume_light-removebg.png';
import portraitDark from '../assets/resume_dark-removebg.png';
import portraitLightHover from '../assets/resume_light-hover-removebg.png';
import portraitDarkHover from '../assets/resume_dark-hover-removebg.png';
import resumePdf from '../assets/resume.pdf';
import { motion } from 'framer-motion';

const Hero = () => {
  const tagline = "Building AI-powered full-stack solutions.";
  const words = tagline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="top"
      className="bg-hero border-b border-border pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight transition-colors duration-500">
            Jude Mikael Valencia
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-secondary transition-colors duration-500">
            Software Engineer / Fullstack Developer
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-base md:text-lg font-medium italic mt-2 flex flex-wrap justify-center md:justify-start"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="mr-1.5 text-secondary transition-colors duration-500"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <p className="text-secondary leading-relaxed max-w-lg transition-colors duration-500">
            Computer Science student at Cebu Institute of Technology -
            University, focused on full-stack development, AI integration,
            blockchain systems, and cloud-ready applications.
          </p>

          <div className="text-sm text-secondary flex flex-wrap gap-2 items-center justify-center md:justify-start transition-colors duration-500">
            <span>Cebu City, Philippines</span>
            <span>·</span>
            <span>CIT-U Computer Science Student</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-bg font-medium rounded-md hover:opacity-90 hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-border font-medium rounded-md hover:bg-border hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center"
            >
              Contact Me
            </a>

            <a
              href={resumePdf}
              download="Jude_Mikael_Valencia_Resume.pdf"
              className="px-6 py-3 border border-border font-medium rounded-md hover:bg-border hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="group relative w-56 sm:w-64 md:w-80 aspect-[4/5] bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex items-end justify-center px-4 pt-8 mt-4 md:mt-0 transition-colors duration-500">
            
            {/* Light Mode Normal */}
            <img
              src={portraitLight}
              alt="Jude Mikael Valencia"
              className="
                absolute inset-0 w-full h-full object-contain object-bottom
                px-4 pt-8 drop-shadow-md
                opacity-100
                transition-opacity duration-100
                group-hover:opacity-0
                dark:opacity-0
              "
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x500?text=JMV";
              }}
            />

            {/* Light Mode Hover / Waving */}
            <img
              src={portraitLightHover}
              alt="Jude Mikael Valencia waving"
              className="
                absolute inset-0 w-full h-full object-contain object-bottom
                px-4 pt-8 drop-shadow-md
                opacity-0
                transition-opacity duration-100
                group-hover:opacity-100
                dark:opacity-0 dark:group-hover:opacity-0
              "
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x500?text=JMV";
              }}
            />

            {/* Dark Mode Normal */}
            <img
              src={portraitDark}
              alt="Jude Mikael Valencia"
              className="
                absolute inset-0 w-full h-full object-contain object-bottom
                px-4 pt-8 drop-shadow-md
                opacity-0
                transition-opacity duration-100
                dark:opacity-100
                dark:group-hover:opacity-0
              "
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x500?text=JMV";
              }}
            />

            {/* Dark Mode Hover / Waving */}
            <img
              src={portraitDarkHover}
              alt="Jude Mikael Valencia waving"
              className="
                absolute inset-0 w-full h-full object-contain object-bottom
                px-4 pt-8 drop-shadow-md
                opacity-0
                transition-opacity duration-100
                dark:group-hover:opacity-100
              "
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x500?text=JMV";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;