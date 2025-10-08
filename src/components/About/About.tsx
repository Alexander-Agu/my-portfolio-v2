import { Code2, GraduationCap, Users } from "lucide-react";
import AboutHeader from "./about/AboutHeader";
import AboutStory from "./about/AboutStory";
import AboutStats from "./about/AboutStats";
import AboutHighlightCard from "./about/AboutHighlightCard";
import TechStack from "./about/TechStack";

const About = () => {
  const techStack = [
    "React", "Tailwind CSS", "ASP.NET", "Java Spring Boot", 
    "Node.js", "SQL Server", "MySQL", "Firebase", 
    "AWS", "Unity", "Godot", "Blender"
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: GraduationCap,
      title: "WeThinkCode Graduate",
      description: "Rigorous training in algorithmic thinking and software architecture"
    },
    {
      icon: Users,
      title: "Technical Mentorship",
      description: "Empowering the next generation of developers"
    }
  ];

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Built" },
    { value: "12+", label: "Technologies" }
  ];

  return (
    <section id="about" className="section-dark py-24 px-6 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      
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
            <AboutStats stats={stats} />
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
