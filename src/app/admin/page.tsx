"use client";

import { Users, Calendar, CreditCard, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RESERVATIONS } from "@/lib/data";

export default function AdminDashboard() {
  const stats = [
    { title: "Active Bookings", value: RESERVATIONS.length.toString(), icon: Calendar, change: "+4 today" },
    { title: "Rooftop Occupancy", value: "84%", icon: TrendingUp, change: "+12% vs yesterday" },
    { title: "New CRM Leads", value: "18", icon: Users, change: "+3 this week" },
    { title: "Estimated Revenue", value: "$4,250", icon: CreditCard, change: "Today's Projection" },
  ];

  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div>
        <h1 className="font-serif text-3xl font-semibold text-foreground">Operational Overview</h1>
        <p className="font-sans text-sm text-muted-foreground mt-1">
          Real-time occupancy dynamics and guest allocation tracking.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-[#fff8f5] border border-border/40 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="font-sans text-xs font-bold tracking-widest uppercase text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="w-5 h-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="font-sans text-2xl font-bold text-primary">{stat.value}</div>
                  <p className="font-sans text-[10px] font-light text-muted-foreground mt-1 italic">
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Operational Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Reservations */}
        <Card className="lg:col-span-2 bg-[#fff8f5] border border-border/40 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-primary">Pending / Current Reservations</CardTitle>
          </CardHeader>
          <CardContent className="p-0 font-sans">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-[10px] font-bold uppercase tracking-widest bg-[#e4d7d2]/30 border-b border-border/30 text-foreground">
                  <tr>
                    <th className="px-6 py-3">Guest</th>
                    <th className="px-6 py-3">Time</th>
                    <th className="px-6 py-3">Seating</th>
                    <th className="px-6 py-3">Guests</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {RESERVATIONS.map((res) => (
                    <tr key={res.id} className="hover:bg-[#e4d7d2]/10 transition-colors">
                      <td className="px-6 py-4 font-medium">{res.guestName}</td>
                      <td className="px-6 py-4">{res.time}</td>
                      <td className="px-6 py-4 capitalize">{res.seating}</td>
                      <td className="px-6 py-4">{res.guests}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            res.status === "confirmed"
                              ? "bg-blue-100 text-blue-800 border border-blue-200"
                              : res.status === "seated"
                              ? "bg-green-100 text-green-800 border border-green-200"
                              : "bg-amber-100 text-amber-800 border border-amber-200"
                          }`}
                        >
                          {res.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Floor Map Layout */}
        <Card className="lg:col-span-1 bg-[#fff8f5] border border-border/40 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-primary">Live Floor Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 font-sans">
            <div className="grid grid-cols-3 gap-4">
              {[
                { table: "R1", cap: 4, status: "occupied" },
                { table: "R2", cap: 2, status: "available" },
                { table: "I1", cap: 6, status: "occupied" },
                { table: "I2", cap: 4, status: "available" },
                { table: "B1", cap: 2, status: "available" },
                { table: "B2", cap: 2, status: "reserved" },
              ].map((t) => (
                <div
                  key={t.table}
                  className={`border p-3 rounded-md text-center flex flex-col items-center transition-all cursor-pointer ${
                    t.status === "occupied"
                      ? "border-red-200 bg-red-50 text-red-800"
                      : t.status === "reserved"
                      ? "border-amber-200 bg-amber-50 text-amber-800"
                      : "border-green-200 bg-green-50 text-green-800"
                  }`}
                >
                  <span className="font-bold text-sm">{t.table}</span>
                  <span className="text-[9px] uppercase tracking-wider opacity-70 mt-1">
                    Cap: {t.cap}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-border/30 text-[10px] text-muted-foreground flex justify-between">
              <span>🟢 Available</span>
              <span>🔴 Occupied</span>
              <span>🟡 Reserved</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
