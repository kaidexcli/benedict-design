import { portfolioData } from "@/data";

export default function StatGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-indigo-200/60 pt-12 mt-auto">
      {portfolioData.stats.map((stat) => (
        <div key={stat.label} className="space-y-1">
          <div className="text-2xl font-semibold tracking-tight">{stat.value}</div>
          <div className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
