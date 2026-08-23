"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceOverview } from "@/components/ServiceOverview";
import { motion } from "framer-motion";
import ScrollDown from "@/components/ScrollDown";
import { ShieldCheck, Award, Star, ArrowRight, CheckCircle2, Wrench, Users, PhoneCall } from "lucide-react";

async function getHomeData() {
  const res = await fetch("/api/home");
  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }
  return res.json();
}

interface HomeData {
  hero: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    description: string;
    icon: "wrench" | "cpu" | "paintBucket";
  }[];
  testimonials: {
    quote: string;
    author: string;
  }[];
}

interface TestimonialProps {
  quote: string;
  author: string;
}

export const Testimonials: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md flex flex-col justify-between relative hover:shadow-xl transition-all">
      <div className="flex items-center space-x-1 text-amber-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-400" />
        ))}
      </div>
      <p className="text-slate-700 italic text-base leading-relaxed mb-6">
        "{quote}"
      </p>
      <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{author}</h4>
          <span className="text-xs text-slate-500 font-medium">Verified Car Owner</span>
        </div>
      </div>
    </div>
  );
};

export default function HomeClient() {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    getHomeData().then(setHomeData).catch(setError);
  }, []);

  if (error) {
    throw error;
  }

  if (!homeData) {
    return null;
  }

  return (
    <div className="pt-24 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-28 flex items-center justify-center">
        {/* Decorative Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 border border-blue-200/80 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-xs"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Precision Automotive Engineering & Maintenance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6"
          >
            {homeData.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            {homeData.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button asChild size="lg" className="btn-primary w-full sm:w-auto text-base">
              <Link href="/contact" className="flex items-center justify-center space-x-2">
                <span>Schedule Service Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-outline w-full sm:w-auto text-base">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>

          {/* Quick Stats Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/40">
            <div className="text-center border-r border-slate-100 last:border-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">15+</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Years Experience</p>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">5,000+</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Cars Serviced</p>
            </div>
            <div className="text-center border-r border-slate-100 last:border-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600">99.8%</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">24/7</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Complete Automotive Care
            </span>
            <h2 className="section-title mt-3">Our Core Engineering Services</h2>
            <p className="section-subtitle">
              From computerized engine diagnostics to complete mechanical overhauls, our certified technicians deliver dealer-quality service at honest prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.services.map((service, index) => (
              <ServiceOverview
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-primary">
              <Link href="/services" className="inline-flex items-center space-x-2">
                <span>View Complete Service Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Trusted By Thousands
            </span>
            <h2 className="section-title mt-3">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real feedback from drivers who rely on D.S Engineering Automobile for their vehicle safety and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeData.testimonials.map((testimonial, index) => (
              <Testimonials
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* High Conversion Call-to-Action */}
      <section className="py-16 mx-4 sm:mx-8 lg:mx-auto max-w-7xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Ready to Give Your Car the Care It Deserves?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Book an appointment today with our master technicians. We inspect, diagnose, and repair your vehicle with full transparent warranty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="btn-secondary text-base w-full sm:w-auto">
              <Link href="/contact" className="flex items-center justify-center space-x-2">
                <span>Book Appointment Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <a
              href="tel:+8801935398517"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl border border-white/20 transition-all text-base w-full sm:w-auto"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call +880 1935-398517</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
