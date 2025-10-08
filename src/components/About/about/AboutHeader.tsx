import { Sparkles } from "lucide-react";

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
    <div className="text-center space-y-4 mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-primary">{badge}</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-foreground">
        {title}
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default AboutHeader;
