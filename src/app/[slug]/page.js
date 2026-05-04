"use client";
import SettingsPanel from "@/components/SettingsPanel";
import { SurahSidebar } from "@/components/SurahSidebar";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

export default function QuranApp() {
  const [rightOpen, setRightOpen] = useState(true);
  const [arabicSize, setArabicSize] = useState(33);
  const [transSize, setTransSize] = useState(19);
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  // Load Settings & Fetch Sidebar List
  useEffect(() => {
    const savedArabic = localStorage.getItem("arabicSize");
    if (savedArabic) setArabicSize(parseInt(savedArabic));

    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => setSurahs(data.data));
  }, []);

  // Define fetchSurah with useCallback to prevent unnecessary re-renders
  const fetchSurah = useCallback(async (id) => {
    if (!id) return;
    setLoading(true);
    try {
      const [arabicRes, transRes] = await Promise.all([
        fetch(`https://api.alquran.cloud/v1/surah/${id}`),
        fetch(`https://api.alquran.cloud/v1/surah/${id}/en.sahih`),
      ]);

      const arabicResponse = await arabicRes.json();
      const transResponse = await transRes.json();

      const combined = {
        ...arabicResponse.data,
        verses: arabicResponse.data.ayahs.map((ayah, index) => ({
          ...ayah,
          translation: transResponse.data.ayahs[index].text,
        })),
      };

      setSelectedSurah(combined);
    } catch (error) {
      console.error("Error fetching Surah:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Trigger fetchSurah when slug changes or surah list is fetched
  useEffect(() => {
    if (surahs.length > 0) {
      const targetId = slug || 1; // Default to Fatiha (1) if no slug
      fetchSurah(targetId);
    }
  }, [slug, surahs, fetchSurah]);

  return (
    <div className="flex flex-1 overflow-hidden">
      <SurahSidebar
        surahs={surahs}
        onSelect={(id) => fetchSurah(id)}
        slug={slug}
      />

      <main className="flex-1 overflow-y-auto p-6 bg-background">
        <div className="max-w-3xl mx-auto">
          {loading ? (
            <div className="flex h-64 items-center justify-center text-emerald-500">
              <span className="animate-pulse">Loading Surah...</span>
            </div>
          ) : selectedSurah ? (
            <>
              <div className="mb-8 p-6 rounded-xl text-center border border-slate-700 bg-bgsecondary">
                <h1 className="text-3xl font-bold mb-2 text-white">
                  {selectedSurah.englishName}
                </h1>
                <p className="text-emerald-500">
                  {selectedSurah.revelationType} • {selectedSurah.numberOfAyahs}{" "}
                  Verses
                </p>
              </div>

              <div className="space-y-8">
                {selectedSurah.verses.map((ayah) => (
                  <div
                    key={ayah.number}
                    className="p-6 border-b border-white/5 group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                        {selectedSurah.number}:{ayah.numberInSurah}
                      </span>
                      <div
                        className="text-right leading-[2.5] font-arabic flex-1 text-white"
                        style={{ fontSize: `${arabicSize}px` }}
                        dir="rtl"
                      >
                        {ayah.text}
                      </div>
                    </div>
                    <div
                      className="text-slate-400 leading-relaxed"
                      style={{ fontSize: `${transSize}px` }}
                    >
                      {ayah.translation}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </main>

      <SettingsPanel
        isOpen={rightOpen}
        arabicSize={arabicSize}
        setArabicSize={setArabicSize}
        transSize={transSize}
        setTransSize={setTransSize}
      />
    </div>
  );
}
