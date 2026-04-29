"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, ShieldCheck, Star, Clock } from "lucide-react";
import Link from "next/link";
import { MENU_ITEMS, RESERVATIONS } from "@/lib/data";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "reservations" | "favorites">("overview");

  // Assuming user is "Julianne Sterling" for client-side simulation
  const user = {
    name: "Julianne Sterling",
    email: "julianne@gastronomytoday.com",
    tier: "VIP Member",
    points: 2450,
    visits: 12,
    memberSince: "2024",
  };

  const userReservations = RESERVATIONS.filter(
    (res) => res.guestEmail === user.email
  );
  
  const savedItems = MENU_ITEMS.slice(0, 3); // mock saved favorites

  return (
    <div className="min-h-screen bg-[#fff8f5] pt-32 pb-16 px-6 text-[#211a17]">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-[#e4d7d2]/20 border border-border/30 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 justify-between mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center font-serif text-3xl font-bold shadow-md">
              {user.name.charAt(0)}
            </div>
            <div>
              <h1 className="font-serif text-3xl font-semibold text-foreground mb-2">{user.name}</h1>
              <p className="font-sans text-sm text-muted-foreground mb-1">{user.email}</p>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mt-2">
                <Star className="w-3.5 h-3.5 fill-primary" />
                {user.tier}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-[#fff8f5] border border-border/30 rounded-md w-32">
              <span className="font-sans text-2xl font-bold text-primary">{user.points}</span>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-muted-foreground mt-1">Points</p>
            </div>
            <div className="p-4 bg-[#fff8f5] border border-border/30 rounded-md w-32">
              <span className="font-sans text-2xl font-bold text-primary">{user.visits}</span>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-muted-foreground mt-1">Visits</p>
            </div>
          </div>
        </div>

        {/* Profile Content & Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
            {([
              { id: "overview", label: "Overview", icon: ShieldCheck },
              { id: "reservations", label: "Reservations", icon: Calendar },
              { id: "favorites", label: "Favorites", icon: Heart },
            ] as const).map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 font-sans text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-DEFAULT transition-all duration-300 flex-shrink-0 w-full text-left ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-sm"
                      : "bg-[#e4d7d2]/20 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-3 bg-[#fff8f5] border border-border/20 rounded-lg p-6 md:p-10 min-h-[400px]">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-4">Welcome back, Julianne</h3>
                  <p className="font-sans text-sm font-light text-muted-foreground leading-relaxed">
                    As a VIP Member, you enjoy priority reservations, customized occasion seating, and chef-tasting invitation packages.
                  </p>
                </div>

                <div className="pt-6 border-t border-border/20">
                  <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-foreground mb-4">Membership Perks</h4>
                  <ul className="space-y-3 text-sm font-light font-sans text-[#53443c]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Complimentary valet parking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Secret cocktail access at The Alchemist Bar
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Zero booking window restrictions
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "reservations" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-border/30 pb-4">
                  <h3 className="font-serif text-xl font-medium text-foreground">Your Bookings</h3>
                  <Link href="/reservations">
                    <button className="bg-primary text-white font-sans text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-DEFAULT">
                      New Booking
                    </button>
                  </Link>
                </div>

                {userReservations.length > 0 ? (
                  <div className="space-y-4">
                    {userReservations.map((res) => (
                      <div key={res.id} className="border border-border/30 rounded-md p-6 flex flex-col md:flex-row justify-between md:items-center bg-[#e4d7d2]/10 gap-4">
                        <div className="space-y-2">
                          <div className="font-serif text-lg font-semibold text-primary">{res.date}</div>
                          <div className="flex items-center gap-6 font-sans text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {res.time}</span>
                            <span>{res.guests} Guests</span>
                            <span className="capitalize font-medium text-foreground">{res.seating} seating</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-sans text-[10px] font-bold uppercase tracking-wider bg-green-100 border border-green-300 text-green-800 px-3 py-1 rounded-full">
                            {res.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-sans text-sm text-muted-foreground text-center py-10">No bookings recorded.</p>
                )}
              </div>
            )}

            {activeTab === "favorites" && (
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-medium text-foreground border-b border-border/30 pb-4">Saved Dishes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {savedItems.map((item) => (
                    <div key={item.id} className="border border-border/20 rounded-md overflow-hidden flex bg-[#e4d7d2]/10">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                      <div className="p-4 flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-base font-medium text-primary">{item.name}</h4>
                          <p className="font-sans text-[10px] text-muted-foreground line-clamp-2">{item.description}</p>
                        </div>
                        <span className="font-sans text-xs font-bold text-foreground">₹{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
