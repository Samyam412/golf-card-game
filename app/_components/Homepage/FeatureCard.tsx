interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-[3vmin] rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
      <div className="mb-[2vmin] text-primary">{icon}</div>
      <h3 className="text-[2.5vmin] font-semibold mb-[1vmin]">{title}</h3>
      <p className="text-[2vmin] text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
