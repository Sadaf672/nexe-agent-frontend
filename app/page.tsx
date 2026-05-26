"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Sidebar from "@/components/Sidebar";


export default function Home() {

  // Modal State
  const [open, setOpen] = useState(false);

  // Sidebar State
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (

    <div>

      {/* Navbar */}
      <Navbar
        openSidebar={() =>
          setSidebarOpen(true)
        }
      />

      {/* Hero */}
      <Hero
        openModal={() => setOpen(true)}
      />

      {/* Features */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* Modal */}
      {open && (
        <Modal
          close={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      {sidebarOpen && (
        <Sidebar
          close={() =>
            setSidebarOpen(false)
          }
        />
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}