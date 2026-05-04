import { useState } from "react";

export default function SettingsPanel({
  isOpen,
  arabicSize,
  setArabicSize,
  transSize,
  setTransSize,
}) {
  const [readingOpen, setReadingOpen] = useState(true);
  const [fontOpen, setFontOpen] = useState(false);

  return (
    <aside
      className={`border-l border-borderColor transition-all duration-300 ease-in-out overflow-hidden flex flex-col ${
        isOpen ? "w-80" : "w-0 border-none"
      }`}
    >
      <div className="min-w-[320px] flex flex-col h-full">
        {/* FIXED TABS SECTION */}
        <div className="p-7 pt-6 pb-2">
          <div className="flex bg-bgmain rounded-full p-1 border border-borderColor">
            <button className="flex-1 py-1.5 rounded-full bg-bgsecondary text-white text-sm font-medium transition-all">
              Translation
            </button>
            <button className="flex-1 py-1.5 rounded-full text-gray-500 text-sm">
              Reading
            </button>
          </div>
        </div>

        {/* SCROLLABLE CONTENT SECTION */}
        <div className="flex-1 overflow-y-auto px-5 custom-scrollbar">
          {/* 1. Reading Settings Accordion */}
          <div className="pt-4">
            <button
              onClick={() => setReadingOpen(!readingOpen)}
              className="w-full flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  className="size-5 text-gray-500 transition-all duration-200 group-data-[state=open]:hidden"
                >
                  <path
                    d="M20.1673 15.3449V4.28072C20.1673 3.18072 19.269 2.36489 18.1782 2.45655H18.1232C16.1982 2.62155 13.274 3.60239 11.6423 4.62906L11.4865 4.72989C11.2207 4.89489 10.7807 4.89489 10.5148 4.72989L10.2857 4.59239C8.65398 3.57489 5.73898 2.60322 3.81398 2.44739C2.72315 2.35572 1.83398 3.18072 1.83398 4.27155V15.3449C1.83398 16.2249 2.54898 17.0499 3.42898 17.1599L3.69482 17.1966C5.68398 17.4624 8.75482 18.4707 10.5148 19.4332L10.5515 19.4516C10.799 19.5891 11.1932 19.5891 11.4315 19.4516C13.1915 18.4799 16.2715 17.4624 18.2698 17.1966L18.5723 17.1599C19.4523 17.0499 20.1673 16.2249 20.1673 15.3449Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11 5.03247V18.7825"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.10352 7.78247H5.04102"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.79102 10.5325H5.04102"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span
                  className={`font-semibold ${readingOpen ? "text-emerald-500" : "text-gray-400 group-hover:text-gray-200"}`}
                >
                  Reading Settings
                </span>
              </div>
              <span
                className={`text-gray-500 transition-transform ${readingOpen ? "rotate-180" : ""}`}
              >
                ⌄
              </span>
            </button>

            {/* Reading Content (Static) */}
            <div
              className={`mt-6 space-y-5 overflow-hidden transition-all duration-300 ${readingOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Translations
                </label>
                <div className="bg-[#1e293b]/40 border border-borderColor p-3 rounded-xl flex justify-between items-center text-sm cursor-pointer hover:bg-[#1e293b]/60">
                  Saheeh International <span className="text-gray-500">˃</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Word-by-word
                </label>
                <div className="bg-[#1e293b]/40 border border-borderColor p-3 rounded-xl flex justify-between items-center text-sm cursor-pointer hover:bg-[#1e293b]/60">
                  Bengali <span className="text-gray-500">˃</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-sm text-gray-300">Show by words</span>
                <div className="w-10 h-5 bg-slate-800 rounded-full relative border border-slate-700">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-sm text-gray-300">Tajweed</span>
                <div className="w-10 h-5 bg-slate-800 rounded-full relative border border-slate-700">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Font Settings Accordion */}
          <div className="py-2">
            <button
              onClick={() => setFontOpen(!fontOpen)}
              className="w-full flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  className="size-5 text-gray-500 transition-all duration-200 group-data-[state=open]:hidden"
                >
                  <path
                    d="M7.07031 16.5H11.5703C15.3203 16.5 16.8203 15 16.8203 11.25V6.75C16.8203 3 15.3203 1.5 11.5703 1.5H7.07031C3.32031 1.5 1.82031 3 1.82031 6.75V11.25C1.82031 15 3.32031 16.5 7.07031 16.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5.57031 6.66749C7.93281 5.48999 10.7078 5.48999 13.0703 6.66749"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9.32031 12.225V5.94751"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span
                  className={`font-semibold ${fontOpen ? "text-emerald-500" : "text-gray-400 group-hover:text-gray-200"}`}
                >
                  Font Settings
                </span>
              </div>
              <span
                className={`text-gray-500 transition-transform ${fontOpen ? "rotate-180" : ""}`}
              >
                ⌄
              </span>
            </button>

            <div
              className={`mt-6 space-y-6 overflow-hidden transition-all duration-300 ${fontOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              {/* Font Settings Accordion (Active) */}
              <div className="space-y-4">
                {/* Arabic Font Size */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Arabic Font Size</span>
                    <span className="text-emerald-500">{arabicSize}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="60"
                    value={arabicSize}
                    onChange={(e) => setArabicSize(e.target.value)}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                </div>

                {/* Translation Font Size */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Translation Font Size</span>
                    <span className="text-emerald-500">{transSize}</span>
                  </div>
                  <input
                    type="range"
                    min="14"
                    max="30"
                    value={transSize}
                    onChange={(e) => setTransSize(e.target.value)}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                </div>

                {/* Arabic Font Face */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Arabic Font Face
                  </label>
                  <div className="w-full bg-[#1e293b]/50 border border-borderColor rounded-xl p-3 flex justify-between items-center text-sm text-gray-400 cursor-pointer">
                    Noor E Hedayet
                    <span className="text-xs">˃</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Support Card (Within scrollable area) */}
          <div className="pb-8">
            <div className="bg-[#131912] rounded-xl p-3 pt-5 space-y-3">
              <h4 className="font-bold text-gray-100 leading-tight">
                Help spread the knowledge of Islam
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Your regular support helps us reach our religious brothers and
                sisters with the message of Islam. Join our mission and be part
                of the big change.
              </p>
              <button className="w-full bg-primary text-white font-bold py-2.5 rounded-lg transition-colors text-sm">
                Support Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
