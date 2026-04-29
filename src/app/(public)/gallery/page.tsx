"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"all" | "interior" | "food" | "cocktails">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://b.zmtcdn.com/data/pictures/8/20628188/66a22458174951040b36649c071e6168.jpg",
      category: "interior",
      alt: "Rooftop dining with skyline view of Koramangala",
    },
    {
      url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=60",
      category: "cocktails",
      alt: "Signature Tiramisu Martini",
    },
    {
      url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
      category: "food",
      alt: "Pesto Paneer Tostada",
    },
    {
      url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60",
      category: "food",
      alt: "Smashed Double Lamb Cheeseburger",
    },
    {
      url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&auto=format&fit=crop&q=60",
      category: "cocktails",
      alt: "Pablo's Pastime Cocktail",
    },
    {
      url: "https://b.zmtcdn.com/data/pictures/8/20628188/441a8039088efea100a391e5c72672fb.jpg",
      category: "interior",
      alt: "Groovy indoor seating area",
    },
  ];

  const filteredImages = images.filter(
    (img) => activeTab === "all" || img.category === activeTab
  );

  return (
    <div className="min-h-screen bg-[#fff8f5] pt-32 pb-16 px-6 text-[#211a17]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-primary block mb-2">
            Visual Atmosphere
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            The Gallery
          </h1>
          <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto">
            A photographic walkthrough of Babylonia&apos;s design, culinary art, and evening spirits.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12 border-b border-border/30 pb-6">
          {([
            "all",
            "interior",
            "food",
            "cocktails",
          ] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-DEFAULT transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-white shadow-sm"
                  : "bg-[#e4d7d2]/30 text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry/Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(img.url)}
                className="relative aspect-square overflow-hidden rounded-md cursor-pointer border border-border/20 shadow-sm group"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#211a17]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="font-sans text-xs font-bold tracking-widest uppercase text-white border border-white/40 px-4 py-2 rounded-sm backdrop-blur-sm">
                    Expand
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#211a17]/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-primary focus:outline-none"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Expanded gallery view"
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
