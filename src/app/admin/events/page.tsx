"use client";

import { useState } from "react";
import { Plus, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EVENTS, EventItem } from "@/lib/data";

export default function EventsCMS() {
  const [events, setEvents] = useState<EventItem[]>(EVENTS);

  const togglePublish = (id: string) => {
    setEvents((prev) =>
      prev.map((evt) =>
        evt.id === id ? { ...evt, isPublished: !evt.isPublished } : evt
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-foreground">Events CMS</h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            Publish upcoming cultural highlights, RSVPs tracking, and performance ticketing.
          </p>
        </div>
        <Button className="bg-primary font-sans text-xs font-bold tracking-widest uppercase">
          <Plus className="w-4 h-4 mr-2" /> Create Event
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 font-sans">
        {events.map((event) => (
          <Card key={event.id} className="bg-[#fff8f5] border border-border/40 shadow-sm flex flex-col md:flex-row p-4 gap-6">
            <img
              src={event.banner}
              alt={event.title}
              className="w-full md:w-48 h-32 object-cover rounded-sm border border-border/20 flex-shrink-0"
            />
            
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-xl font-medium text-primary">{event.title}</h3>
                  <span className="font-sans text-xs font-bold text-foreground">${event.coverCharge} cover</span>
                </div>
                <p className="text-xs font-light text-muted-foreground mt-1">
                  {event.date} at {event.time} • {event.artist}
                </p>
              </div>

              <div className="flex justify-between items-end pt-4 md:pt-0">
                <div className="text-xs font-light text-[#53443c]">
                  Capacity: <span className="font-bold">{event.rsvps}</span> / <span className="font-bold">{event.maxCapacity}</span> RSVPs
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {event.isPublished ? "Visible" : "Draft"}
                  </span>
                  <button
                    onClick={() => togglePublish(event.id)}
                    className={`p-2 rounded-md border transition-colors ${
                      event.isPublished
                        ? "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {event.isPublished ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
