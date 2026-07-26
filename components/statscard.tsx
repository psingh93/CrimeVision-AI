type Props = {
  title: string;
  value: string;
  color: string;
};

export default function StatsCard({ title, value, color }: Props) {
  return (
    <div className={`rounded-xl p-6 ${color} shadow-lg`}>
      <h3 className="text-gray-200 text-lg">{title}</h3>
      <h1 className="text-4xl font-bold mt-3">{value}</h1>
    </div>
  );
}