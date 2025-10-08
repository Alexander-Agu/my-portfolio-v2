interface AboutStoryProps {
  name: string;
  introduction: string;
  journey: string;
  current: string;
  highlightName?: string;
}

const AboutStory = ({ 
  name, 
  introduction, 
  journey, 
  current,
  highlightName = "WeThinkCode"
}: AboutStoryProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-5 text-lg leading-relaxed">
        <p className="text-foreground/90">
          I'm <span className="font-bold text-primary">{name}</span>, {introduction}
        </p>
        <p className="text-muted-foreground">
          My journey began at <span className="font-semibold text-foreground">{highlightName}</span>, {journey}
        </p>
        <p className="text-muted-foreground">
          {current}
        </p>
      </div>
    </div>
  );
};

export default AboutStory;
