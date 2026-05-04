// "use client";
// import SettingsPanel from "@/components/SettingsPanel";
// import { SurahSidebar } from "../components/SurahSidebar";
// import { useState, useEffect } from "react";

import Link from "next/link";

// export default function QuranApp() {
//   const [leftOpen, setLeftOpen] = useState(true);
//   const [rightOpen, setRightOpen] = useState(true);
//   const [arabicSize, setArabicSize] = useState(33);
//   const [transSize, setTransSize] = useState(19);
//   const [surahs, setSurahs] = useState([]);
//   const [selectedSurah, setSelectedSurah] = useState(null);

//   // Persistence: Load settings from localStorage
//   useEffect(() => {
//     const savedArabic = localStorage.getItem("arabicSize");
//     if (savedArabic) setArabicSize(parseInt(savedArabic));

//     // Fetch Surah List
//     fetch("https://api.alquran.cloud/v1/surah")
//       .then((res) => res.json())
//       .then((data) => setSurahs(data.data));
//   }, []);

//   const handleSizeChange = (val) => {
//     setArabicSize(val);
//     localStorage.setItem("arabicSize", val);
//   };

//   return (
//     <div className="flex flex-1 overflow-hidden">
//       <SurahSidebar surahs={surahs} onSelect={(id) => fetchSurah(id)} />

//       <main className="flex-1 overflow-y-auto p-6">
//         {/* Ayah Rendering Logic here */}
//         <div className="max-w-3xl mx-auto">
//           <div className="mb-8 p-6 rounded-xl text-center border border-slate-700">
//             <h1 className="text-2xl font-bold">Surah Al-Fatiha</h1>
//             <p className="text-emerald-500">7 Verses • Meccan</p>
//           </div>

//           <div className="space-y-6">
//             {/* Example Ayah Row */}
//             <div className="p-6 border-b border-borderColor">
//               <div
//                 className="text-right mb-4 leading-loose font-arabic"
//                 style={{ fontSize: `${arabicSize}px` }}
//               >
//                 بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
//               </div>
//               <div
//                 className="text-gray-400"
//                 style={{ fontSize: `${transSize}px` }}
//               >
//                 In the name of Allah, the Entirely Merciful, the Especially
//                 Merciful.
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Settings Panel */}
//       <SettingsPanel
//         isOpen={rightOpen}
//         arabicSize={arabicSize}
//         setArabicSize={setArabicSize}
//         transSize={transSize}
//         setTransSize={setTransSize}
//       />
//     </div>
//   );
// }

export default function MainPage() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      Nothing here, return to any surah. For example:{" "}
      <Link href="/1" className="text-primary-500">
        <button className="bg-primary text-white px-4 py-2 rounded-full ml-2">
          Surah 1
        </button>
      </Link>
    </div>
  );
}
