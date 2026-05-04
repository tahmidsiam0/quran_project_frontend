"use client";
import React, { useRef } from "react";
import Topbar from "../components/Topbar";
import "./globals.css";
import IconSidebar from "@/components/IconSidebar";

// This is your Root Layout (app/layout.js)
export default function RootLayout({ children }) {
  const scrollRef = useRef(null);

  return (
    <html lang="en">
      <body className="bg-[#0b1120] text-gray-100 overflow-hidden antialiased">
        <div className="flex h-screen w-full">
          {/* Left Icon Sidebar */}
          <IconSidebar />

          {/* Topbar */}
          <Topbar scrollContainerRef={scrollRef} />

          {/* Main Content Wrapper */}
          <div
            ref={scrollRef}
            className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative pt-15"
          >
            <main className="flex-1 w-full flex bg-bgsecondary">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
