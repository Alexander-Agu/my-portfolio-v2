import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface AboutHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

const AboutHeader = ({ 
  title, 
  subtitle, 
  badge = "About Me" 
}: AboutHeaderProps) => {
  return (
    <motion.div className="text-center space-y-4 mb-20"
      variants={{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{duration: 0.5, delay: 0.25}}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ffffff] mb-4">
        <Sparkles className="w-4 h-4 text-primary text-[#ffffff]" />
        <span className="text-sm font-medium text-[#ffffff]">{badge}</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-[#ffffff]">
        {title}
      </h2>
      <p className="text-xl text-[#ffffff8e] max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default AboutHeader;
