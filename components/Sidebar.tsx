"use client";

import { motion } from "framer-motion";

type SidebarProps = {
  close: () => void;
};

const menuItems = [
  {
    name: "Home",
    icon: "🏠",
    link: "#home",
  },
  {
    name: "Features",
    icon: "⚡",
    link: "#features",
  },
  {
    name: "Testimonials",
    icon: "💬",
    link: "#testimonials",
  },
  {
    name: "Dashboard",
    icon: "📊",
    link: "/dashboard",
  },
  {
    name: "Button Docs",
    icon: "🧩",
    link: "/docs/button",
  },
  {
    name: "Input Docs",
    icon: "⌨️",
    link: "/docs/input",
  },
  {
    name: "Card Docs",
    icon: "🪟",
    link: "/docs/card",
  },
  {
    name: "Toast Docs",
    icon: "🔔",
    link: "/docs/toast",
  },
  {
    name: "Components",
    icon: "🧩",
    link: "/components",
  },
  {
    name: "Accordion",
    icon: "📂",
    link: "/accordion",
  },
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
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 h-screen w-[280px] bg-[#0f172a] z-50 shadow-2xl flex flex-col overflow-y-auto"
      >

        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-5">

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-2xl font-extrabold text-white">

                Sadaf Dashboard

              </h1>

              <p className="text-blue-100 text-sm mt-1">

                Professional Admin Interface

              </p>

            </div>

            {/* Close Button */}
            <button
              onClick={close}
              className="bg-white/20 hover:bg-white/30 w-9 h-9 rounded-full text-white text-lg transition"
            >
              ✕
            </button>

          </div>

        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">

          <p className="text-gray-400 uppercase text-xs mb-4 tracking-widest">

            Navigation

          </p>

          <ul className="space-y-3">

            {menuItems.map((item, index) => (

              <li key={index}>

                <a
                  href={item.link}
                  className="group flex items-center gap-3 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-1 shadow-lg"
                >

                  <span className="text-xl">

                    {item.icon}

                  </span>

                  <span className="text-base font-medium">

                    {item.name}

                  </span>

                </a>

              </li>

            ))}

          </ul>

        </div>

        {/* Bottom Card */}
        <div className="p-4">

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-5 shadow-xl">

            <h3 className="text-xl font-bold text-white mb-2">

              Upgrade UI 🚀

            </h3>

            <p className="text-blue-100 text-sm mb-4">

              Build modern dashboards and reusable components.

            </p>

            <button
              className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Explore More
            </button>

          </div>

        </div>

      </motion.div>
    </>
  );
}