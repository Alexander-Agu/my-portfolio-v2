import { Code2, GraduationCap, Users } from "lucide-react";
import AboutHeader from "./about/AboutHeader";
import AboutStory from "./about/AboutStory";
import AboutHighlightCard from "./about/AboutHighlightCard";
import TechStack from "./about/TechStack";

const About = () => {
  const techStack = [
    "React", "TypeScript", "Tailwind CSS", "C#", "ASP.NET", "Docker",
    "Node.js", "SQL Server", "MySQL","Unity", "Godot", "Blender"
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "WeThinkCode Student ( Sep. 2024 - Dec. 2025 )",
      description: "Software Engineering Deploma"
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: Users,
      title: "Technical Mentorship",
      description: "Empowering the next generation of developers"
    }
  ];


  return (
    <section id="about" className="nunito py-24 px-6 relative overflow-hidden bg-[rgb(31,31,33)]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 " />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AboutHeader 
          title="Crafting Digital Experiences"
          subtitle="Full-stack developer passionate about turning ideas into elegant solutions"
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Story */}
          <div className="space-y-6">
            <AboutStory 
              name="Alexander Agu"
              introduction="a South African full-stack developer and technical mentor dedicated to building innovative solutions that make a difference."
              journey="where I developed strong foundations in software engineering, algorithmic thinking, and collaborative development. The rigorous peer-learning environment taught me not just to code, but to think like an engineer."
              current="Today, I combine my technical expertise with a passion for mentorship, helping guide aspiring developers while continuously pushing the boundaries of what's possible with modern web technologies."
            />
          </div>

          {/* Right: Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <AboutHighlightCard 
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <TechStack technologies={techStack} />
      </div>
    </section>
  );
};

export default About;
