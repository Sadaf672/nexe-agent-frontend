"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Toast from "@/components/ui/Toast";
import Section from "@/components/ui/Section";

export default function ComponentsPage() {

  const [showToast, setShowToast] =
    useState(false);

  const handleToast = () => {

    setShowToast(true);

    setTimeout(() => {

      setShowToast(false);

    }, 3000);

  };

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black">

        {/* Glow Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

        {/* Badge */}
        <div className="mb-6 px-6 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm tracking-widest uppercase text-cyan-300">

          Advanced UI System

        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight max-w-5xl">

          Build Modern <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

            Reusable Components

          </span>

        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-2xl text-gray-400 max-w-3xl leading-9">

          Beautiful reusable frontend architecture with modern
          animations, premium UI design and scalable components.

        </p>

        {/* CTA */}
        <button
          onClick={handleToast}
          className="mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_0_40px_rgba(6,182,212,0.5)]"
        >

          Explore Components 🚀

        </button>

      </div>

      {/* Main Content */}
      <div className="px-5 md:px-12 py-20 space-y-24">

        {/* Buttons Section */}
        <Section
          title="Buttons"
          subtitle="Reusable button variants with modern styling."
        >

          <div className="flex flex-wrap gap-6">

            <div onClick={handleToast}>

              <Button
                text="Primary"
                variant="primary"
                size="md"
              />

            </div>

            <Button
              text="Secondary"
              variant="secondary"
              size="md"
            />

            <Button
              text="Outline"
              variant="outline"
              size="md"
            />

            <Button
              text="Large"
              variant="primary"
              size="lg"
            />

          </div>

        </Section>

        {/* Cards Section */}
        <Section
          title="Premium Cards"
          subtitle="Modern glassmorphism reusable card components."
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Card
              title="Analytics"
              description="Track dashboard analytics with premium UI design."
            />

            <Card
              title="Users"
              description="Manage users professionally using reusable systems."
            />

            <Card
              title="Revenue"
              description="Display revenue and statistics beautifully."
            />

          </div>

        </Section>

        {/* Toast Section */}
        <Section
          title="Toast Notifications"
          subtitle="Interactive popup notification system."
        >

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-md shadow-2xl flex flex-col items-center text-center">

            <h3 className="text-3xl font-bold mb-5">

              Interactive Toast Demo 🔔

            </h3>

            <p className="text-gray-400 max-w-2xl mb-8 text-lg">

              Click the button below to trigger a modern animated
              notification popup.

            </p>

            <button
              onClick={handleToast}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_0_40px_rgba(236,72,153,0.5)]"
            >

              Show Toast ✨

            </button>

          </div>

        </Section>

      </div>

      {/* Toast Popup */}
      {showToast && (
        <Toast message="🚀 Component Activated Successfully" />
      )}

    </div>
  );
}