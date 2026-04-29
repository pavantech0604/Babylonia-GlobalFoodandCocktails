"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, MapPin, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const highlights = [
    {
      title: "Ethereal Vistas",
      desc: "High-altitude sky canopy with 360° panoramic sunset views.",
      icon: MapPin,
    },
    {
      title: "Artisanal Mixology",
      desc: "Botanical infusions meeting vintage wood-fired methodology.",
      icon: Sparkles,
    },
    {
      title: "VIP Hospitality",
      desc: "Priority reservations and dedicated occasion management.",
      icon: ShieldCheck,
    },
  ];

  const topDishes = [
    {
      name: "Butter Chicken Tostada",
      price: "₹329",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Smashed Double Lamb Cheeseburger",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="w-full bg-[#fff8f5] overflow-hidden text-[#211a17]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&auto=format&fit=crop&q=90')] bg-cover bg-center opacity-100" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl flex flex-col items-center pt-32 pb-12 px-16 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_80%)]"
        >
          <span className="font-sans text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-primary mb-6 bg-[#fff8f5]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/20">
            Babylonia • Global Food & Cocktails
          </span>

          <h1 
            className="font-sans text-5xl md:text-[5.5rem] font-extrabold tracking-[0.2em] uppercase text-white leading-none mb-10"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.9)' }}
          >
            Babylonia
          </h1>

          <p 
            className="font-sans text-base md:text-xl font-light text-white max-w-2xl leading-relaxed mb-12"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.9)' }}
          >
            Experience Koramangala&apos;s premier rooftop sky lounge. Impeccable global cuisine served beneath an open, shifting canopy where craft mixology meets the contemporary Bangalore skyline.
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            <Link href="/reservations">
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white font-sans text-sm font-bold tracking-widest uppercase px-16 py-6 rounded-DEFAULT shadow-lg hover:shadow-primary/20 hover:shadow-xl transition-all duration-300"
              >
                Secure A Table
              </motion.button>
            </Link>
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#fff8f5]/80 backdrop-blur-sm border-2 border-primary text-primary font-sans text-sm font-bold tracking-widest uppercase px-16 py-6 rounded-DEFAULT hover:bg-primary hover:text-white hover:shadow-xl transition-all duration-300"
              >
                Explore Flavors
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Premium Highlights Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-border/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center p-6 bg-[#e4d7d2]/10 border border-border/20 rounded-lg hover:border-primary/30 duration-300 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-sans text-xs font-light text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Signature Pairings */}
      <section className="py-24 bg-[#e4d7d2]/20 border-y border-border/20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-primary block">
                Gastronomic Synthesis
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
                Artisan Crafting & Layered Taste
              </h2>
            </div>

            <p className="font-sans text-sm text-[#53443c] leading-relaxed font-light">
              Every plate bridges classic continental disciplines with soulful North Indian aromatics. It is culinary theatre designed for memory.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {topDishes.map((dish) => (
                <div key={dish.name} className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden rounded-md border border-border/30 mb-3">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform" />
                  </div>
                  <h4 className="font-serif text-base font-medium text-foreground flex justify-between items-center">
                    {dish.name}
                    <span className="font-sans text-xs font-bold text-primary">{dish.price}</span>
                  </h4>
                </div>
              ))}
            </div>

            <Link href="/menu">
              <button className="mt-6 font-sans text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-2 group hover:opacity-80 transition-all">
                View Complete Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-300" />
              </button>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[3/4] rounded-md overflow-hidden border border-primary/20 bg-black shadow-2xl relative group">
              <img
                src="/assets/background.webp"
                alt="Babylonia Signature"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05] saturate-[1.1]"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 hidden md:flex items-center gap-3 bg-[#fff8f5] border border-border/40 p-4 rounded-lg shadow-xl max-w-xs">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-muted-foreground block">
                  Guest Review
                </span>
                <p className="font-sans text-xs font-medium text-foreground italic leading-tight mt-1">
                  &quot;An otherworldly atmosphere. The cocktails are absolute perfection.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
