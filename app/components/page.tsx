"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
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

    <div className="min-h-screen bg-black text-white px-5 md:px-12 py-16">

      {/* Hero */}
      <div className="text-center mb-20">

        <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm uppercase tracking-widest mb-6">

          Advanced Component Library

        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">

          Reusable UI <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

            Component System

          </span>

        </h1>

        <p className="mt-8 text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-9">

          Modern reusable frontend architecture with
          responsive UI components and interactive design.

        </p>

      </div>

      {/* Buttons */}
      <Section
        title="Buttons"
        subtitle="Modern reusable button components."
      >

        <div className="flex flex-wrap gap-5">

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

        </div>

      </Section>

      {/* Cards */}
      <Section
        title="Cards"
        subtitle="Premium responsive card system."
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Card
            title="Analytics"
            description="Track analytics beautifully with reusable UI."
          />

          <Card
            title="Users"
            description="Manage users professionally and efficiently."
          />

          <Card
            title="Revenue"
            description="Display revenue statistics elegantly."
          />

        </div>

      </Section>

      {/* Inputs */}
      <Section
        title="Inputs"
        subtitle="Reusable modern form fields."
      >

        <div className="max-w-2xl space-y-5">

          <Input placeholder="Enter your name..." />

          <Input placeholder="Enter your email..." />

          <Input placeholder="Search anything..." />

        </div>

      </Section>

      {/* Toast */}
      <Section
        title="Toast Notifications"
        subtitle="Interactive real-time toast component."
      >

        <button
          onClick={handleToast}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl text-lg md:text-xl font-bold shadow-2xl"
        >

          Show Toast 

        </button>

      </Section>

      {/* Toast */}
      {showToast && (

        <Toast
          message="🚀 Action Completed Successfully"
        />

      )}

    </div>
  );
}