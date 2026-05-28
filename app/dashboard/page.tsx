"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import MultiStepForm from "@/components/MultiStepForm";
import LiveNotifications from "@/components/LiveNotifications";

const cards = [

  {
    title: "Total Users",
    value: "1,250",
    color: "from-blue-500 to-cyan-500",
  },

  {
    title: "Revenue",
    value: "$8,400",
    color: "from-purple-500 to-pink-500",
  },

  {
    title: "Orders",
    value: "320",
    color: "from-orange-500 to-red-500",
  },

];

const menuItems = [

  "Dashboard",
  "Analytics",
  "Users",
  "Settings",

];

const users = [

  { id: 1, name: "Ali", email: "ali@gmail.com" },
  { id: 2, name: "Ahmed", email: "ahmed@gmail.com" },
  { id: 3, name: "Sara", email: "sara@gmail.com" },
  { id: 4, name: "Zain", email: "zain@gmail.com" },
  { id: 5, name: "Ayesha", email: "ayesha@gmail.com" },
  { id: 6, name: "Hamza", email: "hamza@gmail.com" },

];

export default function DashboardPage() {

  const router = useRouter();

  const [page, setPage] =
    useState(1);

  const [darkMode, setDarkMode] =
    useState(true);

  const itemsPerPage = 3;

  const start =
    (page - 1) * itemsPerPage;

  const currentUsers =
    users.slice(
      start,
      start + itemsPerPage
    );

  return (

    <div
      className={`min-h-screen flex flex-col lg:flex-row ${
        darkMode
          ? "bg-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* Sidebar */}
      <div className="w-full lg:w-[260px] bg-gradient-to-b from-[#0f172a] to-[#111827] border-r border-white/10 p-8">

        <h1 className="text-4xl font-extrabold text-white mb-10">

          Nexe Agent

        </h1>

        <div className="space-y-4">

          {menuItems.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-white px-5 py-4 rounded-2xl font-semibold transition-all duration-300 hover:translate-x-2 cursor-pointer"
            >

              {item}

            </div>

          ))}

        </div>

      </div>

      {/* Main */}
      <div className="flex-1 p-5 md:p-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          <div>

            <h2 className="text-4xl md:text-5xl font-extrabold">

              Dashboard Overview

            </h2>

            <p className="text-gray-400 mt-3 text-lg">

              Welcome back 👋

            </p>

          </div>

          <div className="flex gap-4 flex-wrap">

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
            >

              {darkMode
                ? "☀️ Light"
                : "🌙 Dark"}

            </button>

            <button
              onClick={() =>
                router.push("/")
              }
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
            >

              ← Home

            </button>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {cards.map((card, index) => (

            <div
              key={index}
              className={`bg-gradient-to-r ${card.color} p-8 rounded-[32px] shadow-2xl`}
            >

              <h3 className="text-xl opacity-90">

                {card.title}

              </h3>

              <p className="text-5xl font-extrabold mt-5">

                {card.value}

              </p>

            </div>

          ))}

        </div>

        {/* Table */}
        <div
          className={`mt-12 rounded-[32px] p-6 md:p-8 shadow-2xl border ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-gray-200"
          }`}
        >

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

            <div>

              <h3 className="text-3xl font-bold">

                Users Table

              </h3>

              <p className="text-gray-400 mt-2">

                Manage users professionally

              </p>

            </div>

            <input
              type="text"
              placeholder="Search users..."
              className={`px-5 py-4 rounded-2xl outline-none border w-full md:w-[280px] ${
                darkMode
                  ? "bg-black border-white/10 text-white"
                  : "bg-gray-100 border-gray-300 text-black"
              }`}
            />

          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto rounded-2xl">

            <table className="w-full min-w-[650px]">

              <thead>

                <tr className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">

                  <th className="p-5 text-left">
                    User
                  </th>

                  <th className="p-5 text-left">
                    Email
                  </th>

                  <th className="p-5 text-left">
                    Status
                  </th>

                  <th className="p-5 text-left">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {currentUsers.map(
                  (user, index) => (

                    <tr
                      key={user.id}
                      className={`border-b ${
                        darkMode
                          ? "border-white/10 hover:bg-white/5"
                          : "border-gray-200 hover:bg-gray-50"
                      } transition`}
                    >

                      {/* User */}
                      <td className="p-5">

                        <div className="flex items-center gap-4">

                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white">

                            {user.name.charAt(0)}

                          </div>

                          <div>

                            <p className="font-bold">

                              {user.name}

                            </p>

                            <p className="text-sm text-gray-400">

                              ID #{user.id}

                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Email */}
                      <td className="p-5">

                        {user.email}

                      </td>

                      {/* Status */}
                      <td className="p-5">

                        <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">

                          Active

                        </span>

                      </td>

                      {/* Action */}
                      <td className="p-5">

                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition-all duration-300">

                          View

                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-8">

            {/* Info */}
            <div className="text-gray-400">

              Showing{" "}

              <span className="font-bold">

                {start + 1}

              </span>

              {" "}to{" "}

              <span className="font-bold">

                {Math.min(
                  start + itemsPerPage,
                  users.length
                )}

              </span>

              {" "}of{" "}

              <span className="font-bold">

                {users.length}

              </span>

              {" "}users

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">

              <button
                onClick={() =>
                  setPage(page - 1)
                }
                disabled={page === 1}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:scale-105 transition-all duration-300 disabled:opacity-40"
              >

                ← Prev

              </button>

              <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 font-bold">

                {page}

              </div>

              <button
                onClick={() =>
                  setPage(page + 1)
                }
                disabled={
                  start + itemsPerPage >=
                  users.length
                }
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:scale-105 transition-all duration-300 disabled:opacity-40"
              >

                Next →

              </button>

            </div>

          </div>

        </div>

        {/* Multi Step Form */}
        <MultiStepForm />

        {/* Live Notifications */}
        <LiveNotifications />

      </div>

    </div>
  );
}