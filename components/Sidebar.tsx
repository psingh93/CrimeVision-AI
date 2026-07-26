export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 p-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        Dashboard
      </h2>

      <ul className="space-y-5 text-gray-300">
        <li className="hover:text-cyan-400 cursor-pointer">🏠 Home</li>
        <li className="hover:text-cyan-400 cursor-pointer">📊 Analytics</li>
        <li className="hover:text-cyan-400 cursor-pointer">🗺 Crime Map</li>
        <li className="hover:text-cyan-400 cursor-pointer">🚨 Live Alerts</li>
        <li className="hover:text-cyan-400 cursor-pointer">📑 Reports</li>
        <li className="hover:text-cyan-400 cursor-pointer">⚙ Settings</li>
      </ul>
    </aside>
  );
}