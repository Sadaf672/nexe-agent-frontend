"use client";

import { FaBolt, FaMobileAlt, FaPalette } from "react-icons/fa";

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-black"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-white">
            Powerful Features
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Modern frontend development with responsive layouts,
            beautiful interfaces and reusable components.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
              <FaBolt className="text-cyan-400 text-3xl" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Fast Development
            </h3>

            <p className="text-gray-400 leading-8">
              Build websites quickly using reusable components,
              clean architecture and modern frontend workflows.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
              <FaMobileAlt className="text-blue-400 text-3xl" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Responsive Design
            </h3>

            <p className="text-gray-400 leading-8">
              Fully responsive layouts that work seamlessly on
              mobile, tablet and desktop devices.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] hover:border-purple-400/50 hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
              <FaPalette className="text-purple-400 text-3xl" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Modern UI
            </h3>

            <p className="text-gray-400 leading-8">
              Premium colors, smooth interactions and elegant
              interfaces designed for modern web applications.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}