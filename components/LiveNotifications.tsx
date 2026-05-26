"use client";

import { useEffect, useState } from "react";

const fakeNotifications = [

  "🚀 New user registered",
  "💰 Payment received",
  "📦 New order placed",
  "🔥 Server updated",
  "✅ Profile updated",

];

export default function LiveNotifications() {

  const [notifications, setNotifications] =
    useState<string[]>([]);

  useEffect(() => {

    const interval = setInterval(() => {

      const randomNotification =

        fakeNotifications[
          Math.floor(
            Math.random() *
              fakeNotifications.length
          )
        ];

      setNotifications((prev) => [

        randomNotification,
        ...prev,

      ]);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 mt-10">

      <h2 className="text-3xl font-bold mb-6 dark:text-white">

        Live Notifications 🔔

      </h2>

      <div className="space-y-4">

        {notifications.length === 0 && (

          <p className="text-gray-500">

            Waiting for notifications...

          </p>

        )}

        {notifications.map((item, index) => (

          <div
            key={index}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-2xl shadow-lg animate-pulse"
          >

            {item}

          </div>

        ))}

      </div>

    </div>
  );
}