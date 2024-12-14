
"use client";

import React, { Children, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Head from "next/head";
import { DrawerProvider } from "./DrawerContext";

const DashboardLayout = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("dark-mode");
    setIsDarkMode(darkMode === "dark");
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="/dist/css/app.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
<DrawerProvider>
      {/* <div id="root" className={`min-h-100vh ${isDarkMode ? "dark bg-navy-900" : "bg-slate-50"}`}> */}
      {/* <div id="root" className={` min-h-screen flex grow bg-slate-50 dark:bg-navy-900 is-sidebar-open is-header-blur ${isDarkMode ? "dark bg-navy-900" : "bg-slate-50"}`}> */}
      <div id="root" className={` min-h-screen flex grow bg-slate-50 dark:bg-navy-900  is-header-blur`}>
     
        <Sidebar />
        <Topbar />
        {/* <main className="main-content w-full px-8 pb-8"> */}
        <main className="main-content w-full px-[var(--margin-x)] pb-8">
          {/* <div className="flex items-center space-x-4 py-6"> */}
          <div className="flex items-center space-x-4 py-5 lg:py-6">
            {/* <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50">Dashboard</h2> */}
            {children}
          </div>
        </main>
      </div>
      </DrawerProvider>
      <script src="/dist/js/app.js" defer></script>
    </>
  );
};

export default DashboardLayout;


