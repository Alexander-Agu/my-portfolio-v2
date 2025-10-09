import type { LucideIcon } from "lucide-react";

interface AboutHighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AboutHighlightCard = ({ icon: Icon, title, description }: AboutHighlightCardProps) => {
  return (
    <div className="group relative p-6 rounded-2xl border border-[#ffffff8e] transition-all duration-500 hover:translate-x-2">
      <div className="absolute inset-0 rounded-2xl opacity-0" />
      
      <div className="relative flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center">
            <Icon className="w-7 h-7 text-[#ffffff]" />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-bold text-[#ffffff]">
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
