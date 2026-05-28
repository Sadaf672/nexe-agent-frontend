"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type SidebarProps = {
  close: () => void;
};

const links = [

  { name: "🏠 Home", href: "/" },

  { name: "✨ Features", href: "/#features" },

  { name: "💬 Testimonials", href: "/#testimonials" },

  { name: "🧩 Components", href: "/components" },

  { name: "📂 Accordion", href: "/accordion" },

  { name: "📊 Dashboard", href: "/dashboard" },

];

export default function Sidebar({
  close,
}: SidebarProps) {

  return (

    <>
      {/* Overlay */}
      <motion.div
        onClick={close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/60 z-40"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: -350 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 h-screen w-[320px] bg-[#0f172a] z-50 shadow-2xl border-r border-white/10 flex flex-col"
      >

        {/* Top */}
        <div className="p-8 border-b border-white/10">

          <h1 className="text-4xl font-extrabold text-white">

            Nexe Agent

          </h1>

          <p className="text-gray-400 mt-2">

            Modern UI Navigation

          </p>

        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {links.map((link, index) => (

            <Link
              key={index}
              href={link.href}
              onClick={close}
              className="block bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-white px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:translate-x-2"
            >

              {link.name}

            </Link>

          ))}

        </div>

        {/* Bottom */}
        <div className="p-6 border-t border-white/10">

          <button
            onClick={close}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-all duration-300 text-white py-4 rounded-2xl font-bold text-lg"
          >

            Close Menu ✕

          </button>

        </div>

      </motion.div>
    </>
  );
}