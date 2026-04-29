"use client";

import { useState } from "react";
import { Plus, ToggleLeft, ToggleRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MENU_ITEMS, MenuItem } from "@/lib/data";

export default function MenuCMS() {
  const [items, setItems] = useState<MenuItem[]>(MENU_ITEMS);

  const toggleAvailability = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-foreground">Menu CMS</h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">
            Add items, adjust pricing architectures, and mark seasonal ingredient availability.
          </p>
        </div>
        <Button className="bg-primary font-sans text-xs font-bold tracking-widest uppercase">
          <Plus className="w-4 h-4 mr-2" /> Add Dish
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 font-sans">
        {items.map((item) => (
          <Card key={item.id} className="bg-[#fff8f5] border border-border/40 shadow-sm flex items-center p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-sm border border-border/20 mr-6 flex-shrink-0"
            />
            <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div>
                <h3 className="font-serif text-base font-medium text-primary">{item.name}</h3>
                <span className="text-[10px] uppercase tracking-wider bg-[#e4d7d2]/50 text-muted-foreground px-2 py-0.5 rounded-sm">
                  {item.category}
                </span>
              </div>

              <div className="font-sans text-sm font-bold text-foreground">
                ${item.price}
              </div>

              <div className="flex items-center justify-end md:justify-center gap-4">
                <span className="text-xs text-muted-foreground">
                  {item.isAvailable ? "Available" : "Sold Out"}
                </span>
                <button onClick={() => toggleAvailability(item.id)}>
                  {item.isAvailable ? (
                    <ToggleRight className="w-8 h-8 text-primary" />
                  ) : (
                    <ToggleLeft className="w-8 h-8 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
