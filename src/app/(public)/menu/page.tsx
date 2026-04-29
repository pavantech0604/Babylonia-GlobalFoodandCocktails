"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Info } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/lib/data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'continental' | 'asian' | 'indian' | 'cocktails'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cocktails', name: 'Mixology' },
    { id: 'continental', name: 'Continental' },
    { id: 'asian', name: 'Pan-Asian' },
    { id: 'indian', name: 'North Indian' },
  ] as const;

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fff8f5] pt-32 pb-16 px-6 text-[#211a17]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-primary block mb-2">
            Culinary Discovery
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Our Menu
          </h1>
          <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A carefully curated selection of global palettes, designed for high-altitude elegance and layered flavors.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-border/30 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`font-sans text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-DEFAULT transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-[#e4d7d2]/30 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#fff8f5] border border-border/50 text-[#211a17] font-sans text-sm rounded-DEFAULT focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-[#fff8f5] border border-border/20 rounded-md overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#211a17]/10 group-hover:bg-transparent duration-300" />
                  
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-[#fff8f5]/90 shadow-sm hover:bg-[#fff8f5] transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        favorites.includes(item.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
                      }`}
                    />
                  </button>

                  {item.isChefPick && (
                    <span className="absolute bottom-3 left-3 font-sans text-[10px] font-bold tracking-widest uppercase bg-primary text-white px-2 py-1 rounded-sm">
                      Chef Pick
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-sans text-sm font-bold text-primary">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="font-sans text-xs font-light text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setQuickViewItem(item)}
                    className="mt-auto font-sans text-[11px] font-bold tracking-widest uppercase text-primary flex items-center gap-1 hover:opacity-80"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Quick View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-muted-foreground">No items found.</p>
          </div>
        )}
      </div>

      {/* Quick View Drawer */}
      <Sheet open={!!quickViewItem} onOpenChange={(open) => !open && setQuickViewItem(null)}>
        <SheetContent className="bg-[#fff8f5] text-[#211a17] border-l border-border/50">
          {quickViewItem && (
            <div className="space-y-6 py-6 h-full flex flex-col">
              <SheetHeader className="text-left space-y-2">
                <SheetTitle className="font-serif text-2xl text-primary">
                  {quickViewItem.name}
                </SheetTitle>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-lg font-bold text-foreground">
                    ₹{quickViewItem.price}
                  </span>
                  <span className="font-sans text-[10px] font-bold uppercase bg-[#e4d7d2]/50 px-2 py-1 rounded-sm text-muted-foreground tracking-widest">
                    {quickViewItem.category}
                  </span>
                </div>
              </SheetHeader>

              <div className="aspect-video overflow-hidden rounded-md border border-border/20">
                <img
                  src={quickViewItem.image}
                  alt={quickViewItem.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 flex-grow">
                <SheetDescription className="font-sans text-sm font-light leading-relaxed text-[#53443c]">
                  {quickViewItem.description}
                </SheetDescription>

                <div className="pt-4">
                  <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-foreground mb-2">
                    Dietary / Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {quickViewItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-[10px] font-bold tracking-wider uppercase bg-[#fff8f5] border border-border/50 px-3 py-1.5 rounded-full text-[#211a17]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/20">
                <Link href="/reservations" onClick={() => setQuickViewItem(null)}>
                  <button className="w-full bg-primary text-white font-sans text-xs font-bold tracking-widest uppercase py-4 rounded-DEFAULT hover:bg-opacity-90 transition-all">
                    Book A Table To Order
                  </button>
                </Link>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
