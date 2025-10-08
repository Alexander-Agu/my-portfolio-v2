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
        <p className="text-[#ffffff8e]">
          I'm <span className="font-bold text-[#ffffff]">{name}</span>, {introduction}
        </p>
        <p className="text-[#ffffff8e]">
          My journey began at <span className="font-semibold text-[#ffffff]">{highlightName}</span>, {journey}
        </p>
        <p className="text-[#ffffff8e]">
          {current}
        </p>
      </div>
    </div>
  );
};

export default AboutStory;
