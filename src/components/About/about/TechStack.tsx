import { Target } from "lucide-react";

interface TechStackProps {
  technologies: string[];
  title?: string;
  subtitle?: string;
}

const TechStack = ({ 
  technologies, 
  title = "Technology Stack",
  subtitle = "Tools and frameworks I work with"
}: TechStackProps) => {
  return (
    <div className="relative">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#ffffff] mb-2 inline-flex items-center gap-2 ">
          <Target className="w-6 h-6 text-[#ffffff]" />
          {title}
        </h3>
        <p className="text-[#ffffff8e]">{subtitle}</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <span 
            key={tech} 
            className="tech-badge hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default text-[#ffffff]"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
