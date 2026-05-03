import "./globals.css";

export default function Layout({ children }) {
  return (
    <html>
      <body className="font-arabic">
        <div className="flex h-screen bg-[#0f172a] text-gray-100 overflow-hidden">
          {/* 1. Left Icon Sidebar */}
          <aside className="w-16 border-r border-slate-800 flex flex-col items-center py-4 space-y-8 bg-[#1e293b]">
            <div className="text-emerald-500 font-bold text-xl">Q</div>
            <button className="p-2 hover:bg-slate-700 rounded-lg">📖</button>
            <button className="p-2 hover:bg-slate-700 rounded-lg">🔍</button>
            <button className="p-2 hover:bg-slate-700 rounded-lg">⚙️</button>
          </aside>

          {/* Main Content Area */}
          {children}
        </div>
      </body>
    </html>
  );
}
