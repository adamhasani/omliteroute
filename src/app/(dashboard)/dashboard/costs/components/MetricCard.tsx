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
    <Card className="p-4 flex flex-col justify-between border border-[#271e36] bg-[#171424] hover:border-[#382b4d] transition-all rounded-xl shadow-none">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-semibold">{label}</p>
        {icon && (
          <span className={`material-symbols-outlined text-[17px] opacity-80 ${color}`}>
            {icon}
          </span>
        )}
      </div>
      <div className="mt-2">
        <p className={`text-2xl font-bold tracking-tight font-mono ${color}`}>{loading ? "…" : value}</p>
        {subValue ? <p className="text-[11px] text-[#94a3b8] mt-1 font-sans truncate">{subValue}</p> : null}
      </div>
    </Card>
  );
}
