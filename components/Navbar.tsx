export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-slate-900 border-b border-slate-800">
      <div>
        <h1 className="text-3xl font-bold text-cyan-400">
          CrimeVision AI
        </h1>
        <p className="text-gray-400 text-sm">
          AI-Driven Crime Analytics & Visualization Platform
        </p>
      </div>

      <div className="flex gap-8 text-gray-300">
        <a href="#" className="hover:text-cyan-400">Dashboard</a>
        <a href="#" className="hover:text-cyan-400">Analytics</a>
        <a href="#" className="hover:text-cyan-400">Heatmap</a>
        <a href="#" className="hover:text-cyan-400">Reports</a>
      </div>
    </nav>
  );
}