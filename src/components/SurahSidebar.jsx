import { useState } from "react";

export function SurahSidebar({ surahs, onSelect, selectedId }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter surahs based on search
  const filteredSurahs = surahs.filter(
    (s) =>
      s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.name.includes(searchQuery),
  );

  return (
    <aside className="w-85 border-r border-slate-800 flex flex-col h-screen bg-[#0b1120] text-gray-300">
      {/* FIXED HEADER SECTION */}
      <div className="p-4 space-y-4 shadow-lg">
        {/* 3 Tabs */}
        <div className="flex bg-[#1e293b]/50 rounded-full p-1 border border-slate-800">
          <button className="flex-1 py-1.5 px-4 rounded-full bg-[#1e293b] text-white text-sm font-medium">
            Surah
          </button>
          <button className="flex-1 py-1.5 px-4 rounded-full text-gray-500 text-sm">
            Juz
          </button>
          <button className="flex-1 py-1.5 px-4 rounded-full text-gray-500 text-sm">
            Page
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search Surah"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1e293b]/30 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors"
          />
        </div>
      </div>

      {/* SCROLLABLE LIST SECTION */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 custom-scrollbar">
        <div className="space-y-3">
          {filteredSurahs.map((s) => (
            <div
              key={s.number}
              onClick={() => onSelect(s.number)}
              className={`flex items-center p-4 rounded-2xl cursor-pointer border transition-all ${
                selectedId === s.number
                  ? "bg-[#1e293b]/80 border-emerald-500/50"
                  : "bg-[#1e293b]/20 border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Diamond Number Shape */}
              <div className="relative w-10 h-10 flex items-center justify-center mr-4">
                <div className="absolute inset-0 bg-slate-800 rotate-45 rounded-md"></div>
                <span className="relative z-10 text-xs font-bold">
                  {s.number}
                </span>
              </div>

              <div className="flex-1">
                <p className="font-semibold text-[15px]">{s.englishName}</p>
                <p className="text-gray-500 text-xs">
                  {s.englishNameTranslation}
                </p>
              </div>

              <div className="text-right text-xl font-arabic text-white/90">
                {s.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
