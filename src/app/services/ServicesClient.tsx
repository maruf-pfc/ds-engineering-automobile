"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Wrench, Cpu, PaintBucket, Shield, Cog, CheckCircle2, Clock, DollarSign, Calendar, ArrowRight } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

const iconMap = {
  Wrench,
  Cpu,
  PaintBucket,
  Shield,
  Cog,
};

interface Service {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  details: string[];
  estimatedCost: string;
  estimatedDuration: string;
}

interface ServicesData {
  intro: {
    title: string;
    description: string;
  };
  services: Service[];
}

async function getServicesData() {
  const res = await fetch("/api/services");
  if (!res.ok) {
    throw new Error("Failed to fetch services data");
  }
  return res.json();
}

export default function ServicesClient() {
  const [servicesData, setServicesData] = useState<ServicesData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    getServicesData().then(setServicesData).catch(setError);
  }, []);

  if (error) {
    throw error;
  }

  if (!servicesData) {
    return <LoadingSpinner />;
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <Wrench className="w-4 h-4 text-blue-600" />
          <span>Professional Service Catalog</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          {servicesData.intro.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {servicesData.intro.description}
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            return (
              <Card
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <CardHeader className="p-6 pb-4 bg-gradient-to-b from-slate-50/80 to-white border-b border-slate-100">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Includes & Deliverables:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <div className="p-6 pt-0 bg-white">
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 mb-4 text-xs font-medium text-slate-600">
                    <div className="flex items-center space-x-1.5 bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <DollarSign className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="truncate">{service.estimatedCost}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{service.estimatedDuration}</span>
                    </div>
                  </div>
                  <Link
                    href="#book-service"
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Booking Form Section */}
      <section id="book-service" className="py-16 bg-slate-50/70 border-y border-slate-200/80 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Schedule Your Appointment
            </span>
            <h2 className="section-title mt-3">Book Service Diagnostic</h2>
            <p className="section-subtitle">
              Fill out the form below to reserve a service slot. Our workshop supervisor will confirm within 1 hour.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl">
            {bookingSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-semibold flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Your service appointment request has been submitted successfully!</span>
              </div>
            )}
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Select Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  >
                    <option value="">Choose a service package</option>
                    {servicesData.services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="btn-primary w-full text-base">
                Confirm Service Booking
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="text-center py-12 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Need Custom Modifications or Engine Overhauls?
        </h2>
        <p className="text-slate-600 mb-6">
          Speak directly with our Chief Engineer for specialized performance upgrades.
        </p>
        <Button asChild size="lg" className="btn-outline">
          <Link href="/contact">Contact Chief Engineer</Link>
        </Button>
      </section>
    </div>
  );
}
