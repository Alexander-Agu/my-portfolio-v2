import { ExternalLink, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";
import project1 from "../../assets/invitory.png";
import project2 from "../../assets/fin.jpg";
// import project3 from "@/assets/project-3.jpg";
// import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Task Management Dashboard",
      description: "A comprehensive task management application with real-time updates, team collaboration features, and analytics.",
      image: project1,
      tags: ["React", "ASP.NET", "Docker"],
      github: "https://github.com/Alexander-Agu/Invi-Tory.git",
      demo: "https://invi-tory.vercel.app/"
    },
    {
      title: "Property Management API",
      description: "Fix It Now is a property maintenance management application that connects tenants and property admins in one place. It replaces manual calls, emails, or WhatsApp messages with a streamlined system for reporting, tracking, and resolving issues quickly and transparently.",
      image: project2,
      tags: ["C#", "ASP.NET", "SQL", "Docker", "Makefile", "Bash"],
      github: "https://github.com/Alexander-Agu/FIN.git",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section-light py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-card-foreground">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, mobile apps, and game design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-project group">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-card-foreground group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <a 

                    className=" bg-[rgb(31,31,33)] text-[#ffffff]"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 p-2 " />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
