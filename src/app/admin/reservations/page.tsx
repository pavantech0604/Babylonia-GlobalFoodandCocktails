"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Trash, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RESERVATIONS, Reservation } from "@/lib/data";

export default function ReservationsCMS() {
  const [data, setData] = useState<Reservation[]>(RESERVATIONS);

  const updateStatus = (id: string, newStatus: Reservation["status"]) => {
    setData((prev) =>
      prev.map((res) => (res.id === id ? { ...res, status: newStatus } : res))
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-foreground">Reservation CMS</h1>
        <p className="font-sans text-sm text-muted-foreground mt-1">
          Manage booking verifications, table seating tracking, and no-show mitigations.
        </p>
      </div>

      <Card className="bg-[#fff8f5] border border-border/40 shadow-sm font-sans">
        <CardHeader>
          <CardTitle className="font-serif text-xl text-primary">All Bookings</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="text-[10px] font-bold uppercase tracking-widest bg-[#e4d7d2]/30 border-b border-border/30 text-foreground">
                <tr>
                  <th className="px-6 py-3">Guest</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3">Guests</th>
                  <th className="px-6 py-3">Section</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-[#211a17]">
                {data.map((res) => (
                  <tr key={res.id} className="hover:bg-[#e4d7d2]/10 transition-colors">
                    <td className="px-6 py-4 font-medium">
                      <div>{res.guestName}</div>
                      <div className="text-[10px] font-light text-muted-foreground">{res.guestEmail}</div>
                    </td>
                    <td className="px-6 py-4">{res.date}</td>
                    <td className="px-6 py-4">{res.time}</td>
                    <td className="px-6 py-4">{res.guests}</td>
                    <td className="px-6 py-4 capitalize">{res.seating}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          res.status === "confirmed"
                            ? "bg-blue-100 text-blue-800"
                            : res.status === "seated"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {res.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {res.status === "pending" && (
                          <button
                            onClick={() => updateStatus(res.id, "confirmed")}
                            className="p-1 bg-green-50 border border-green-200 text-green-600 rounded-md hover:bg-green-100"
                            title="Confirm Booking"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        {res.status === "confirmed" && (
                          <button
                            onClick={() => updateStatus(res.id, "seated")}
                            className="p-1 bg-blue-50 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-100"
                            title="Seat Guest"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        {res.status !== "completed" && res.status !== "no-show" && (
                          <button
                            onClick={() => updateStatus(res.id, "no-show")}
                            className="p-1 bg-red-50 border border-red-200 text-red-600 rounded-md hover:bg-red-100"
                            title="Mark No-Show"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
