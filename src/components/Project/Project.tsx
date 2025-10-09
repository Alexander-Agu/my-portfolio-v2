import { ExternalLink } from "lucide-react";
import project1 from "../../assets/invitory.png";
import project2 from "../../assets/fin.jpg";
import { FiGithub } from "react-icons/fi"
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "Invitory",
      description: "A full-stack inventory management application built with ASP.NET (C#), React, and SQL Server. This app supports user registration and login, secure inventory tracking, and item categorization by type.",
      image: project1,
      tags: ["React", "ASP.NET", "Docker"],
      github: "https://github.com/Alexander-Agu/Invi-Tory.git",
      demo: "https://invi-tory.vercel.app/",
      dir: -100
    },
    {
      title: "Property Management API",
      description: "Fix It Now is a property maintenance management application that connects tenants and property admins in one place. It replaces manual calls, emails, or WhatsApp messages with a streamlined system for reporting, tracking, and resolving issues quickly and transparently.",
      image: project2,
      tags: ["C#", "ASP.NET", "SQL", "Docker", "Makefile", "Bash"],
      github: "https://github.com/Alexander-Agu/FIN.git",
      demo: "#",
      dir: 100
    }
  ];

  return (
    <section id="projects" className="section-light py-20 px-6 inter overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">

        <div className="text-center space-y-4 mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-black"
            variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{duration: 0.5, delay: 0.25}}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p className="text-lg text-[#0000008e] max-w-2xl mx-auto"
              variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{duration: 0.5, delay: 0.30}}
          >
            A showcase of the projects I’ve built and the work I’ve done.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} className="border border-black group"
              variants={{
              hidden: {opacity: 0, x: project.dir},
              visible: {opacity: 1, x: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{duration: 0.5, delay: 0.25}}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold inter group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#00000096] min-">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pl-1 pr-1 bg-green-200 border border-green-400 text-green-600 rounded-2xl text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <a 

                    className="bg-[rgb(31,31,33)] hover:bg-black text-[#ffffff] p-2"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <FiGithub className="w-4 h-4 mr-2 text-white " />
                    Code
                  </a>
                  <a 
                    className={`bg-green-300 p-2 hover:bg-green-500 group/btn ${project.demo === "#"? "hidden": ""}`}
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.a
          href="https://github.com/Alexander-Agu"
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-7 p-3 hover:bg-[rgb(31,31,33)] text-black
            border border-[rgb(31,31,33)] bg-transparent hover:text-[#ffffff]
          "
                      variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{duration: 0.5, delay: 0.25}}
        >
          <FiGithub className="w-4 h-4 mr-2 " /> 
          View my GITHUB
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
