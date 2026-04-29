"use client";

import { useState } from "react";
import { Shield, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GUEST_PROFILES, GuestProfile } from "@/lib/data";

export default function GuestsCRM() {
  const [guests, setGuests] = useState<GuestProfile[]>(GUEST_PROFILES);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-foreground">Guest Profiles CRM</h1>
        <p className="font-sans text-sm text-muted-foreground mt-1">
          Review visit logs, premium tiers, and preferred seating configurations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {guests.map((guest) => (
          <Card key={guest.id} className="bg-[#fff8f5] border border-border/40 shadow-sm font-sans">
            <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-border/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#e4d7d2]/40 rounded-full flex items-center justify-center text-primary font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="font-serif text-xl text-primary">{guest.name}</CardTitle>
                  <p className="text-xs font-light text-muted-foreground">{guest.email} • {guest.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                <Shield className="w-3.5 h-3.5" />
                {guest.spendTier} Tier
              </div>
            </CardHeader>
            
            <CardContent className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans">
              <div>
                <span className="font-bold text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">
                  Preferences
                </span>
                <ul className="list-disc pl-4 space-y-1 font-light text-[#53443c]">
                  {guest.preferences.map((pref, idx) => (
                    <li key={idx}>{pref}</li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-bold text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">
                  Visit Metrics
                </span>
                <p className="font-light text-[#53443c]">Total Visits: <span className="font-bold">{guest.visitCount}</span></p>
                <p className="font-light text-[#53443c]">Favorite Spot: <span className="font-bold">{guest.favoriteSection}</span></p>
              </div>

              {guest.birthday && (
                <div>
                  <span className="font-bold text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">
                    Important Dates
                  </span>
                  <p className="font-light text-[#53443c]">Birthday: {guest.birthday}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
