interface RuleSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function RuleSection({ title, children }: RuleSectionProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-[4vmin] shadow-sm">
      <h3 className="text-[3.5vmin] font-semibold mb-[3vmin] flex items-center gap-[1.5vmin]">
        {title}
      </h3>
      <div className="space-y-[2vmin]">{children}</div>
    </div>
  );
}
