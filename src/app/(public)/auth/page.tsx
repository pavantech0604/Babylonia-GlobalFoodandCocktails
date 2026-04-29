"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Scalable mock redirect: user logging in goes to Profile, admin goes to Admin
    if (email.toLowerCase().includes("admin")) {
      router.push("/admin");
    } else {
      router.push("/profile");
    }
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-[#fff8f5] flex items-center justify-center px-6 text-[#211a17]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#fff8f5] border border-border/30 rounded-lg p-8 shadow-sm"
      >
        <div className="text-center mb-8">
          <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-primary block mb-2">
            Guest Portal
          </span>
          <h1 className="font-serif text-3xl font-semibold text-foreground">
            {isLogin ? "Welcome Back" : "Join Babylonia"}
          </h1>
          <p className="font-sans text-xs text-muted-foreground mt-2">
            {isLogin ? "Log in to manage your rooftop bookings." : "Create an account for exclusive culinary rewards."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tip: use 'admin@babylonia.com' to test Admin view"
              className="w-full bg-transparent border-b border-[#211a17] font-sans py-2 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/40 placeholder:text-xs"
            />
          </div>

          <div>
            <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-1 block">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-[#211a17] font-sans py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:opacity-90 font-sans text-xs font-bold tracking-widest uppercase py-4 mt-4"
          >
            {isLogin ? "Login" : "Create Account"}
          </Button>
        </form>

        <div className="text-center mt-6 font-sans text-xs">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary hover:underline font-bold tracking-wider uppercase"
          >
            {isLogin ? "Create a New Account" : "Already have an account? Login"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
