"use client";

import { useState } from "react";
import { ShieldCheck, LayoutDashboard, Calendar, UtensilsCrossed, Sparkles, Users, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Overview", path: "/admin", icon: LayoutDashboard },
    { name: "Reservations", path: "/admin/reservations", icon: Calendar },
    { name: "Menu CMS", path: "/admin/menu", icon: UtensilsCrossed },
    { name: "Events CMS", path: "/admin/events", icon: Sparkles },
    { name: "Guests CRM", path: "/admin/crm", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#f3e6e0]/20 flex text-[#211a17] font-sans relative overflow-x-hidden">
      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-[#211a17]/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-64 bg-[#fff8f5] border-r border-border/40 flex flex-col fixed h-screen z-50 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}>
        <div className="flex flex-col items-center justify-center text-center border-b border-border/30 pt-2 pb-2 bg-[#e4d7d2]/10">
          <img src="/assets/logo.png" alt="Babylonia" className="h-40 w-auto object-contain mx-auto" />
        </div>

        <nav className="flex-grow flex flex-col gap-1 p-4 mt-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link key={item.path} href={item.path} onClick={() => setIsSidebarOpen(false)}>
                <span
                  className={`flex items-center gap-3 font-sans text-xs font-bold tracking-widest uppercase px-4 py-3 rounded-DEFAULT cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "hover:bg-primary/10 hover:text-primary text-muted-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-border/30 text-xs font-light text-muted-foreground text-center p-4">
          Staff Role: Administrator
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow md:pl-64 min-h-screen flex flex-col">
        {/* Mobile Header / Toggle */}
        <div className="md:hidden flex items-center justify-between px-6 py-4 bg-[#fff8f5] border-b border-border/30 sticky top-0 z-30 shadow-sm">
          <Link href="/">
            <img src="/assets/logo.png" alt="Babylonia" className="h-12 object-contain" />
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-DEFAULT border border-border/40 text-primary hover:bg-primary/10 transition-all"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="p-6 md:p-10 flex-grow">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
