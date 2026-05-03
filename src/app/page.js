"use client";
import { SurahSidebar } from "../components/SurahSidebar";
import { useState, useEffect } from "react";

export default function QuranApp() {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [arabicSize, setArabicSize] = useState(24);
  const [transSize, setTransSize] = useState(16);

  // Persistence: Load settings from localStorage
  useEffect(() => {
    const savedArabic = localStorage.getItem("arabicSize");
    if (savedArabic) setArabicSize(parseInt(savedArabic));

    // Fetch Surah List
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => setSurahs(data.data));
  }, []);

  const handleSizeChange = (val) => {
    setArabicSize(val);
    localStorage.setItem("arabicSize", val);
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      <SurahSidebar surahs={surahs} onSelect={(id) => fetchSurah(id)} />

      <main className="flex-1 overflow-y-auto p-6 bg-[#0f172a]">
        {/* Ayah Rendering Logic here */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 p-6 bg-[#1e293b] rounded-xl text-center border border-slate-700">
            <h1 className="text-2xl font-bold">Surah Al-Fatiha</h1>
            <p className="text-emerald-500">7 Verses • Meccan</p>
          </div>

          <div className="space-y-6">
            {/* Example Ayah Row */}
            <div className="p-6 border-b border-slate-800">
              <div
                className="text-right mb-4 leading-loose font-arabic"
                style={{ fontSize: `${arabicSize}px` }}
              >
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </div>
              <div
                className="text-gray-400"
                style={{ fontSize: `${transSize}px` }}
              >
                In the name of Allah, the Entirely Merciful, the Especially
                Merciful.
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Settings Panel (Float right or Modal) */}
      <div className="w-64 p-4 border-l border-slate-800 bg-[#1e293b]">
        <h3 className="mb-4 font-bold">Font Settings</h3>
        <label className="text-xs text-gray-500">Arabic Font Size</label>
        <input
          type="range"
          min="20"
          max="60"
          value={arabicSize}
          onChange={(e) => handleSizeChange(e.target.value)}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
      </div>
    </div>
  );
}
