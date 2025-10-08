import type { LucideIcon } from "lucide-react";

interface AboutHighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AboutHighlightCard = ({ icon: Icon, title, description }: AboutHighlightCardProps) => {
  return (
    <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-card-dark to-card-dark/50 border border-[#ffffff8e] hover:border-primary/30 transition-all duration-500 hover:translate-x-2">
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-primary text-[#ffffff]" />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-bold text-[#ffffff] group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-[#ffffff8e] text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHighlightCard;
