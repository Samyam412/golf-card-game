interface RuleItemProps {
  icon: string;
  children: React.ReactNode;
}

export default function RuleItem({ icon, children }: RuleItemProps) {
  return (
    <div className="flex items-start gap-[2vmin]">
      <span className="text-[2.5vmin] flex-shrink-0 mt-[0.5vmin]">{icon}</span>
      <p className="text-[2.2vmin] text-foreground/90 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
