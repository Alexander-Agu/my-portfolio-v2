import ResumeCard from "./ResumeCard";
import { education, experience } from "./ResumeTools";
import { FaRegNewspaper } from "react-icons/fa6";
import CV from "../../assets/Alexander_Agu_Resume.pdf";
import { AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "motion/react";

const Resume = () => {
  return (
    <section id="resume" className="section-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">

          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}
            variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{duration: 0.5, delay: 0.25}}
          >
            Resume
          </motion.h2>


          <motion.p className="text-gray-600 text-lg"
            variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{duration: 0.5, delay: 0.30}}
          >
            My professional journey and education
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {
            experience.map((x, index) => {
              const {icon, type, name, timeSpan, company, location, results} = x;

              return <ResumeCard key={index}
                dir={-100}
                icon={icon}
                type={type}
                name={name}
                timeSpan={timeSpan}
                location={location}
                results={results}
                company={company}
              />
            })
          }
          
          {
            education.map((x, index) => {
              const {icon, type, name, timeSpan, company, location, results} = x;

              return <ResumeCard key={index}
                dir={100}
                icon={icon}
                type={type}
                name={name}
                timeSpan={timeSpan}
                location={location}
                results={results}
                company={company}
              />
            })
          }


        </div>

        <motion.div className="flex flex-row items-center justify-center gap-3"
            variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{duration: 0.5, delay: 0.25}}
        >
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 p-3 hover:bg-[rgb(31,31,33)] text-black
              border border-[rgb(31,31,33)] bg-transparent hover:text-[#ffffff]
            "
          >
            <FaRegNewspaper className="w-4 h-4 mr-2 " /> 
            Download my CV
          </a>

          <a
            href="https://www.linkedin.com/in/alexander-agu-b1968630a"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 p-3 hover:bg-[rgb(31,31,33)] text-black
              border border-[rgb(31,31,33)] bg-transparent hover:text-[#ffffff]
            "
          >
            <AiOutlineLinkedin className="w-4 h-4 mr-2 " /> 
            View my LinkedIn
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
