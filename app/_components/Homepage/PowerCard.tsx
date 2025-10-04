interface PowerCardProps {
  card: string;
  icon: React.ReactNode;
  description: string;
}

export default function PowerCard({ card, icon, description }: PowerCardProps) {
  return (
    <div className="flex items-start gap-[2vmin] p-[2.5vmin] bg-muted/30 rounded-lg border border-border/50">
      <div className="flex items-center justify-center min-w-[6vmin] h-[6vmin] bg-primary/10 rounded-lg text-primary font-bold text-[2vmin]">
        {card}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-[1vmin] mb-[0.5vmin] text-primary">
          {icon}
        </div>
        <p className="text-[1.9vmin] text-foreground/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
