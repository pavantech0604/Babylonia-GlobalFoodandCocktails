"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Music, Ticket, Sparkles } from "lucide-react";
import { EVENTS, EventItem } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'music' | 'theme' | 'special'>('all');

  const filteredEvents = EVENTS.filter(
    (event) => selectedCategory === "all" || event.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#fff8f5] pt-32 pb-16 px-6 text-[#211a17]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-primary block mb-2">
            Exclusive Gatherings
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Events & Experiences
          </h1>
          <p className="font-sans text-sm text-muted-foreground max-w-xl mx-auto">
            Unforgettable rooftop evenings curated with world-class music, heritage themes, and sensory mixology.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 border-b border-border/30 pb-6">
          {([
            "all",
            "music",
            "theme",
            "special",
          ] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-sans text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-DEFAULT transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-[#e4d7d2]/30 text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-[#fff8f5] border border-border/20 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={event.banner}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211a17]/60 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-[#fff8f5]/90 backdrop-blur-sm text-primary font-sans text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
                  {event.coverCharge > 0 ? `₹${event.coverCharge} Cover` : "Free Entry"}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-3">
                    {event.category === "music" && <Music className="w-4 h-4" />}
                    {event.category === "theme" && <Sparkles className="w-4 h-4" />}
                    {event.title}
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <p className="font-sans text-sm font-light text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-border/30 font-sans text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger render={
                    <Button className="w-full bg-primary font-sans text-xs font-bold tracking-widest uppercase py-4 mt-4 hover:opacity-90">
                      RSVP Now
                    </Button>
                  } />
                  <DialogContent className="bg-[#fff8f5] text-[#211a17] border border-border/30">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-xl text-primary">
                        RSVP for {event.title}
                      </DialogTitle>
                      <DialogDescription className="font-sans font-light text-[#53443c] pt-1">
                        Join us on {event.date} at {event.time} for this exclusive experience.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <form className="space-y-4 pt-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-1 block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-transparent border-b border-[#211a17] font-sans py-2 text-sm focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-1 block">
                          Tickets Count
                        </label>
                        <input
                          type="number"
                          min="1"
                          defaultValue="1"
                          className="w-full bg-transparent border-b border-[#211a17] font-sans py-2 text-sm focus:outline-none focus:border-primary"
                        />
                      </div>
                      <Button className="w-full bg-primary font-sans text-xs font-bold tracking-widest uppercase py-4 mt-4">
                        Complete RSVP
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
