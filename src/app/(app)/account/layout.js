"use client";

import { useState } from "react";
import AppSidebar from "@/components/layout/AppSidebar";

export default function AccountLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      <main
        className={`flex-1 p-6 transition-all duration-300 ease-out ${
          isCollapsed ? "ml-20" : "ml-80"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
