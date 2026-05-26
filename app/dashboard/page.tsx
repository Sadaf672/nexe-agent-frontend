"use client";

import LiveNotifications from "@/components/LiveNotifications";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MultiStepForm from "@/components/MultiStepForm";
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

  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const itemsPerPage = 3;

  const start = (page - 1) * itemsPerPage;

  const currentUsers = users.slice(start, start + itemsPerPage);

  return (

    <div
      className={`min-h-screen flex flex-col lg:flex-row ${
        darkMode
          ? "bg-gray-900"
          : "bg-gray-100"
      }`}
    >

      {/* Sidebar */}
      <div className="w-full lg:w-[240px] bg-gradient-to-b from-blue-700 to-purple-700 text-white p-6">

        <h1 className="text-3xl font-bold mb-8">
          Admin Panel
        </h1>

        <ul className="space-y-4">

          {menuItems.map((item, index) => (

            <li
              key={index}
              className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl cursor-pointer transition"
            >
              {item}
            </li>

          ))}

        </ul>

      </div>

      {/* Main */}
      <div className="flex-1 p-5 md:p-8">

        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>

            <h2
              className={`text-3xl md:text-4xl font-bold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Dashboard Overview
            </h2>

            <p className="text-gray-500 mt-2">
              Welcome back 👋
            </p>

          </div>

          <div className="flex gap-3 flex-wrap">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-black text-white px-5 py-3 rounded-xl"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            <button
              onClick={() => router.push("/")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
            >
              ← Home
            </button>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {cards.map((card, index) => (

            <div
              key={index}
              className={`bg-gradient-to-r ${card.color} p-6 rounded-2xl shadow-lg text-white`}
            >

              <h3 className="text-lg opacity-90">
                {card.title}
              </h3>

              <p className="text-4xl font-bold mt-4">
                {card.value}
              </p>

            </div>

          ))}

        </div>

        {/* User Table */}
        <div
          className={`mt-10 rounded-2xl shadow-lg p-5 ${
            darkMode
              ? "bg-gray-800"
              : "bg-white"
          }`}
        >

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Users Table
              </h3>

              <p className="text-gray-500 mt-1">
                Manage users easily
              </p>

            </div>

            <input
              type="text"
              placeholder="Search..."
              className={`px-4 py-3 rounded-xl outline-none border w-full md:w-[250px] ${
                darkMode
                  ? "bg-gray-900 border-gray-700 text-white"
                  : "bg-gray-100 border-gray-300 text-black"
              }`}
            />

          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl">

            <table className="w-full min-w-[600px]">

              <thead>

                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">

                  <th className="p-4 text-left">User</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>

                </tr>

              </thead>

              <tbody>

                {currentUsers.map((user, index) => (

                  <tr
                    key={user.id}
                    className={`border-b transition hover:bg-blue-50 ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-700"
                        : "border-gray-200"
                    } ${
                      index % 2 === 0
                        ? darkMode
                          ? "bg-gray-900"
                          : "bg-gray-50"
                        : ""
                    }`}
                  >

                    {/* User */}
                    <td className="p-4">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                          {user.name.charAt(0)}
                        </div>

                        <div>

                          <p
                            className={`font-semibold ${
                              darkMode ? "text-white" : "text-black"
                            }`}
                          >
                            {user.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            ID #{user.id}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* Email */}
                    <td
                      className={`p-4 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {user.email}
                    </td>

                    {/* Status */}
                    <td className="p-4">

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Active
                      </span>

                    </td>

                    {/* Action */}
                    <td className="p-4">

                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                        View
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">

            <p className="text-gray-500">
              Showing {start + 1} to{" "}
              {Math.min(start + itemsPerPage, users.length)}
            </p>

            <div className="flex gap-3">

              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg disabled:bg-gray-400 transition"
              >
                Prev
              </button>

              <button
                onClick={() => setPage(page + 1)}
                disabled={start + itemsPerPage >= users.length}
                className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg disabled:bg-gray-400 transition"
              >
                Next
              </button>

            </div>

          </div>

        </div>
        <MultiStepForm />
        <LiveNotifications />

      </div>

    </div>
  );
}