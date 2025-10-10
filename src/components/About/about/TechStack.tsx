import { Target } from "lucide-react";
import { motion } from "motion/react";

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
    <motion.div className="relative"
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{duration: 0.5, delay: 0.25}}
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#ffffff] mb-2 inline-flex items-center gap-2 ">
          {title}
        </h3>
        <p className="text-[#ffffff8e]">{subtitle}</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <span 
            key={tech} 
            className="tech-badge hover:scale-105 transition-all duration-300 cursor-default text-[#ffffff] pl-2 pr-2 text-center border border-amber-100 rounded-2xl
             bg-[#ffffff69]"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
