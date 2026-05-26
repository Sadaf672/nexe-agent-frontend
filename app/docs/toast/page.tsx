"use client";

import { useState } from "react";

import Toast from "@/components/ui/Toast";

export default function ToastDocsPage() {

  const [showToast, setShowToast] =
    useState(false);

  const handleToast = () => {

    setShowToast(true);

    setTimeout(() => {

      setShowToast(false);

    }, 3000);

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-10 flex flex-col items-center justify-center">

      <h1 className="text-6xl font-extrabold text-white mb-6">

        Toast Component 🚀

      </h1>

      <p className="text-gray-400 text-xl mb-12">

        Advanced reusable notification system

      </p>

      {/* Button */}
      <button
        onClick={handleToast}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
      >

        Show Toast

      </button>

      {/* Toast */}
      {showToast && (
        <Toast message="🚀 Action Completed Successfully" />
      )}

    </div>
  );
}