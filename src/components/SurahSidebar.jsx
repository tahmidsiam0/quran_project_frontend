import Link from "next/link";
import { useState } from "react";

export function SurahSidebar({ surahs, onSelect, slug }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter surahs based on search
  const filteredSurahs = surahs.filter(
    (s) =>
      s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.name.includes(searchQuery),
  );

  return (
    <aside className="w-85 border-r border-borderColor flex flex-col h-screen text-gray-300">
      {/* FIXED HEADER SECTION */}
      <div className="pt-6 pb-4 px-7 space-y-4 shadow-lg">
        {/* 3 Tabs */}
        <div className="flex bg-bgmain rounded-full p-1 h-10">
          <button className="flex-1 flex items-center justify-center rounded-full bg-bgsecondary text-white text-sm font-medium">
            Surah
          </button>
          <button className="flex-1 flex items-center justify-center rounded-full text-gray-500 text-sm">
            Juz
          </button>
          <button className="flex-1 flex items-center justify-center rounded-full text-gray-500 text-sm">
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
            className="w-full bg-[#1e293b]/30 border border-borderColor py-2.5 pl-10 pr-4 focus:outline-none focus:border-none transition-colors rounded-full h-10 placeholder:text-sm placeholder:text-gray-500/50"
          />
        </div>
      </div>

      {/* SCROLLABLE LIST SECTION */}
      <div className="flex-1 overflow-y-auto px-7 pb-4 custom-scrollbar">
        <div className="space-y-2">
          {filteredSurahs.map((s) => (
            <Link
              key={s.number}
              href={`/${s.number}`}
              className={`flex items-center p-4 rounded-xl cursor-pointer group border transition-all ${
                slug.toString() === s.number.toString()
                  ? "bg-[#111510] border border-[#21331f]"
                  : "bg-bgsecondary border-borderColor hover:border-[#21331f] hover:bg-[#111510]"
              }`}
            >
              {/* Diamond Number Shape */}
              <div className="relative w-8.5 h-8.5 flex items-center justify-center mr-4">
                <div
                  className={`absolute inset-0 rotate-45 rounded-md ${
                    slug.toString() === s.number.toString()
                      ? "bg-primary"
                      : "bg-bgmain group-hover:bg-primary"
                  }`}
                ></div>
                <span className="relative z-10 text-xs font-bold">
                  {s.number}
                </span>
              </div>

              <div className="flex-1">
                <p className="font-medium text-[15px]">{s.englishName}</p>
                <p className="text-gray-500 text-xs">
                  {s.englishNameTranslation}
                </p>
              </div>

              <div className="text-right text-xs font-arabic text-white/90">
                {s.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
