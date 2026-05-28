"use client";

import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [openSidebar, setOpenSidebar] =
    useState(false);

  return (

    <>

      {/* Navbar */}
      <Navbar
        openSidebar={() =>
          setOpenSidebar(true)
        }
      />

      {/* Sidebar */}
      {openSidebar && (

        <Sidebar
          close={() =>
            setOpenSidebar(false)
          }
        />

      )}

      {/* Main Content */}
      <div className="pt-[90px]">

        {children}

      </div>

    </>
  );
}