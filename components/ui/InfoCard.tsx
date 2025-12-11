export default function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-200 dark:border-slate-700">
      <div className="p-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg text-white">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">{value}</p>
      </div>
    </div>
  );
}