"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, Clock, Users, Award, MapPin } from "lucide-react";
import { format } from "date-fns";
import canvasConfetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ReservationsPage() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);
  const [seating, setSeating] = useState<string>("rooftop");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occasion, setOccasion] = useState("");
  const [requests, setRequests] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];
  const seatingOptions = [
    { id: "rooftop", label: "Sky Canopy Rooftop", desc: "Open air with majestic sunset view", icon: MapPin },
    { id: "indoor", label: "Luxe Indoor Lounge", desc: "Plush seating with moody, fine-dining setting", icon: Award },
    { id: "bar", label: "Mixology Bar", desc: "Up-close with expert bartenders", icon: Users },
  ];

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    canvasConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#884d27", "#C89045", "#fff8f5"],
    });
    setIsSuccess(true);
  };

  const resetForm = () => {
    setStep(1);
    setDate(new Date());
    setTime("");
    setGuests(2);
    setSeating("rooftop");
    setName("");
    setEmail("");
    setPhone("");
    setOccasion("");
    setRequests("");
    setIsSuccess(false);
  };

  return (
    <div className="min-h-screen bg-[#fff8f5] pt-32 pb-16 px-6 text-[#211a17]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-primary block mb-2">
            Reservations
          </span>
          <h1 className="font-serif text-4xl font-semibold text-foreground mb-2">
            Book Your Table
          </h1>
          <p className="font-sans text-sm text-muted-foreground max-w-md mx-auto">
            Secure an ethereal experience beneath the sky. Walk-ins are limited.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all duration-300 ${
                  step >= s
                    ? "bg-primary text-white"
                    : "bg-[#e4d7d2]/40 text-muted-foreground"
                }`}
              >
                {s}
              </span>
              {s < 3 && <div className={`w-12 h-[1px] ${step > s ? "bg-primary" : "bg-border/50"}`} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#fff8f5] border border-border/20 rounded-lg p-8 md:p-12 shadow-sm">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-xl font-medium text-foreground border-b border-border/30 pb-2">
                    Step 1: Select Date & Guests
                  </h3>
                  
                  <div>
                    <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-2 block">
                      Select Date
                    </label>
                    <div className="border border-border/50 rounded-md p-3 bg-[#fff8f5] inline-block">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-2 block">
                      Number of Guests
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-10 h-10 rounded-DEFAULT border border-border/50 flex items-center justify-center hover:border-primary transition-colors font-sans text-lg font-semibold"
                      >
                        -
                      </button>
                      <span className="font-sans text-base font-bold w-8 text-center">
                        {guests}
                      </span>
                      <button
                        onClick={() => setGuests(guests + 1)}
                        className="w-10 h-10 rounded-DEFAULT border border-border/50 flex items-center justify-center hover:border-primary transition-colors font-sans text-lg font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleNext}
                      className="bg-primary hover:opacity-90 font-sans text-xs font-bold tracking-widest uppercase px-8 py-4"
                    >
                      Choose Seating & Time
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <h3 className="font-serif text-xl font-medium text-foreground border-b border-border/30 pb-2">
                    Step 2: Seating & Time
                  </h3>

                  <div>
                    <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-3 block">
                      Seating Preference
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {seatingOptions.map((opt) => {
                        const Icon = opt.icon;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => setSeating(opt.id)}
                            className={`p-4 border rounded-md cursor-pointer transition-all ${
                              seating === opt.id
                                ? "border-primary bg-[#e4d7d2]/20"
                                : "border-border/40 hover:border-primary/50"
                            }`}
                          >
                            <Icon className={`w-6 h-6 mb-2 ${seating === opt.id ? "text-primary" : "text-muted-foreground"}`} />
                            <h4 className="font-serif text-sm font-semibold mb-1">{opt.label}</h4>
                            <p className="font-sans text-[10px] font-light text-muted-foreground leading-tight">
                              {opt.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-3 block">
                      Select Time
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setTime(slot)}
                          className={`py-2 font-sans text-xs rounded-sm border transition-all ${
                            time === slot
                              ? "bg-primary text-white border-primary"
                              : "border-border/40 hover:border-primary/50 text-foreground"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="border-primary text-primary hover:bg-primary/10 font-sans text-xs font-bold tracking-widest uppercase"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!time}
                      className="bg-primary hover:opacity-90 font-sans text-xs font-bold tracking-widest uppercase"
                    >
                      Guest Details
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-xl font-medium text-foreground border-b border-border/30 pb-2">
                    Step 3: Personal Details
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-1 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-b border-[#211a17] font-sans py-2 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-1 block">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border-b border-[#211a17] font-sans py-2 text-sm focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-1 block">
                          Phone
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-transparent border-b border-[#211a17] font-sans py-2 text-sm focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-1 block">
                        Occasion (Optional)
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full bg-transparent border-b border-[#211a17] font-sans py-2 text-sm focus:outline-none focus:border-primary"
                      >
                        <option value="" className="text-muted-foreground">None</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Date Night">Date Night</option>
                        <option value="Business">Business</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-sans text-xs font-bold tracking-wider uppercase text-foreground mb-1 block">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        value={requests}
                        onChange={(e) => setRequests(e.target.value)}
                        className="w-full bg-transparent border-b border-[#211a17] font-sans py-2 text-sm focus:outline-none focus:border-primary"
                        rows={2}
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        type="button"
                        className="border-primary text-primary hover:bg-primary/10 font-sans text-xs font-bold tracking-widest uppercase"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-primary hover:opacity-90 font-sans text-xs font-bold tracking-widest uppercase flex-grow"
                      >
                        Confirm Reservation
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Summary Panel */}
          <div className="bg-[#e4d7d2]/20 border border-border/30 rounded-md p-6 flex flex-col justify-between h-fit">
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary border-b border-border/30 pb-2 mb-4">
                Reservation Summary
              </h4>
              
              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                  <span className="font-light">
                    {date ? format(date, "PPPP") : "Date not selected"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-light">{time || "Time not selected"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-light">{guests} Guest{guests > 1 && "s"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-light capitalize">{seating}</span>
                </div>
              </div>
            </div>

            {step === 3 && name && (
              <div className="mt-6 pt-4 border-t border-border/30 font-sans text-xs font-light">
                <p className="text-muted-foreground">Booking for:</p>
                <p className="font-bold text-foreground text-sm mt-1">{name}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="bg-[#fff8f5] text-[#211a17] border border-border/40 text-center max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary text-center">
              Reservation Confirmed
            </DialogTitle>
            <DialogDescription className="font-sans font-light text-center pt-2 text-[#53443c]">
              Thank you, <span className="font-bold">{name}</span>. A verification email has been sent to <span className="font-medium">{email}</span>.
            </DialogDescription>
          </DialogHeader>
          <div className="font-sans text-xs font-light bg-[#e4d7d2]/30 border border-border/20 rounded-md p-4 mt-4 text-left">
            <p className="font-bold text-primary mb-2 uppercase tracking-widest text-[10px]">Details:</p>
            <p><strong>Date:</strong> {date && format(date, "PPP")}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Guests:</strong> {guests}</p>
            <p><strong>Seating:</strong> <span className="capitalize">{seating}</span></p>
          </div>
          <div className="pt-4">
            <Button
              onClick={resetForm}
              className="bg-primary font-sans text-xs font-bold tracking-widest uppercase w-full"
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
