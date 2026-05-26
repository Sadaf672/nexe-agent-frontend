"use client";

import { motion } from "framer-motion";

type ModalProps = {
  close: () => void;
};

export default function Modal({ close }: ModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl"
      >

        <h2 className="text-3xl font-bold text-center text-black mb-2">
          Contact Us 👋
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Fill out the form below
        </p>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-black"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-black"
        />

        <textarea
          placeholder="Your message"
          rows={4}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-black"
        />

        <button
          onClick={() => alert("Message Sent Successfully!")}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
        >
          Send Message
        </button>

        <button
          onClick={close}
          className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition"
        >
          Close
        </button>

      </motion.div>

    </motion.div>
  );
}