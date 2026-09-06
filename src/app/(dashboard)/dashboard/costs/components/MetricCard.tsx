import { Card } from "@/shared/components";

export function MetricCard({
  label,
  value,
  subValue,
  color = "text-text-main",
  loading = false,
  icon,
}: {
  label: string;
  value: string;
  subValue?: string;
  color?: string;
  loading?: boolean;
  icon?: string;
}) {
  return (
    <Card className="p-4 flex flex-col justify-between border border-border/60 bg-[#161220]/70 hover:bg-[#1a1526]/90 transition-all rounded-xl shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] uppercase tracking-wider text-text-muted font-semibold">{label}</p>
        {icon && (
          <span className={`material-symbols-outlined text-[18px] opacity-80 ${color}`}>
            {icon}
          </span>
        )}
      </div>
      <div className="mt-2.5">
        <p className={`text-2xl font-bold tracking-tight font-mono ${color}`}>{loading ? "…" : value}</p>
        {subValue ? <p className="text-xs text-text-muted/80 mt-1 font-sans truncate">{subValue}</p> : null}
      </div>
    </Card>
  );
}
