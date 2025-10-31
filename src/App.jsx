import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, PartyPopper, Heart, CalendarDays, Gift, Image as ImageIcon } from "lucide-react";

const NAME = "Your Sister"; // change this
const TAGLINE = "Happy Birthday! 🎉 Here's a little walk down memory lane.";

const TIMELINE = [
  {
    date: "2010",
    title: "The Cheeky Grin Era",
    text: "Back when your smile could convince anyone to share their snacks.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    date: "2015",
    title: "Tiny Wins, Big Dreams",
    text: "You turned every little victory into a festival. We learned from you.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    date: "2024",
    title: "The Glow Up",
    text: "Growth, grit, and grace. We saw you becoming unstoppable.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    date: "2025",
    title: "Today",
    text: "Another year of you. Can’t wait for what’s next. 💜",
    image: "https://images.unsplash.com/photo-1517817748496-62f19938c23d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BirthdayTimeline() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-violet-50 text-zinc-900">
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            {NAME}'s Birthday
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-lg sm:text-xl max-w-2xl text-zinc-700"
          >
            {TAGLINE}
          </motion.p>
        </div>
      </section>

      <section id="timeline" className="mx-auto max-w-5xl px-4 py-16 space-y-10">
        {TIMELINE.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-md"
          >
            <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
            <div className="p-5">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="mt-1 text-sm text-zinc-600">{item.text}</p>
              <div className="mt-3 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
                <CalendarDays className="mr-2 h-3.5 w-3.5" /> {item.date}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500">
        Built with ❤️ for {NAME}.
      </footer>
    </div>
  );
}
