"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Sidebar from "@/components/Sidebar";

export default function Home() {

  const [openModal, setOpenModal] =
    useState(false);

  const [openSidebar, setOpenSidebar] =
    useState(false);

  return (

    <main className="bg-[#050816] text-white overflow-hidden">

      {/* Navbar */}
      <Navbar
  openSidebar={() =>
    setOpenSidebar(true)
  }
/>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        </div>

        {/* Glow */}
        <div className="absolute top-32 left-10 w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-500/20 blur-[120px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl text-center">

          {/* Small Tag */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">

            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

            <span className="text-sm uppercase tracking-[3px] text-cyan-300">

              Frontend Internship Project

            </span>

          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight">

            Design Future <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

              User Interfaces

            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-9">

            A modern frontend experience built with
            Next.js, Tailwind CSS, Framer Motion,
            reusable components and responsive layouts.

          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <button
              onClick={() => setOpenModal(true)}
              className="bg-white text-black hover:bg-cyan-300 transition-all duration-300 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl"
            >

              Launch Modal

            </button>
 

          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">

              <h2 className="text-5xl font-black text-cyan-400">

                100%

              </h2>

              <p className="text-gray-400 mt-3">

                Responsive Design

              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">

              <h2 className="text-5xl font-black text-purple-400">

                20+

              </h2>

              <p className="text-gray-400 mt-3">

                Reusable Components

              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">

              <h2 className="text-5xl font-black text-pink-400">

                Live

              </h2>

              <p className="text-gray-400 mt-3">

                Real-time Features

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <div id="features">

        <Features />

      </div>

      {/* Testimonials */}
      <div id="testimonials">

        <Testimonials />

      </div>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {openModal && (

        <Modal
          close={() => setOpenModal(false)}
        />

      )}

      {/* Sidebar */}
      {openSidebar && (

        <Sidebar
          close={() => setOpenSidebar(false)}
        />

      )}

    </main>
  );
}
