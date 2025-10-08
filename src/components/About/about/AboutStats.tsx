interface StatItem {
  value: string;
  label: string;
}

interface AboutStatsProps {
  stats: StatItem[];
}

const AboutStats = ({ stats }: AboutStatsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 pt-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10"
        >
          <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
          <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;
