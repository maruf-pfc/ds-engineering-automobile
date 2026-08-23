"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2, ShieldCheck, Users, Sparkles, ArrowRight } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

interface AboutData {
  intro: {
    title: string;
    description: string;
  };
  timeline: {
    year: number;
    description: string;
    title: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  team: {
    name: string;
    role: string;
    image: string;
  }[];
}

async function getAboutData() {
  const res = await fetch("/api/about");
  if (!res.ok) {
    throw new Error("Failed to fetch about data");
  }
  return res.json();
}

export default function AboutClient() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAboutData()
      .then(setAboutData)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!aboutData) {
    return (
      <div className="pt-32 text-center py-20 text-slate-600">
        Failed to load data. Please try again later.
      </div>
    );
  }

  const timelineData = aboutData.timeline.map((item) => ({
    title: item.year.toString(),
    content: (
      <div className="bg-white/80 p-6 rounded-2xl border border-slate-200/80 shadow-md">
        <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {item.description}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={`/about/${item.year}-1.jpg`}
            alt={`${item.title} - Image 1`}
            width={500}
            height={300}
            className="rounded-xl object-cover h-24 sm:h-36 md:h-48 w-full shadow-md hover:scale-[1.02] transition-transform"
          />
          <Image
            src={`/about/${item.year}-2.jpg`}
            alt={`${item.title} - Image 2`}
            width={500}
            height={300}
            className="rounded-xl object-cover h-24 sm:h-36 md:h-48 w-full shadow-md hover:scale-[1.02] transition-transform"
          />
        </div>
      </div>
    ),
  }));

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <span className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Our Legacy & Heritage</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          {aboutData.intro.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {aboutData.intro.description}
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="section-title text-left mb-10 pl-4 border-l-4 border-blue-600">
          Our Milestones
        </h2>
        <Timeline data={timelineData} />
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200/80 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              The D.S Engineering Difference
            </span>
            <h2 className="section-title mt-3">Why Drivers Trust Us</h2>
            <p className="section-subtitle">
              We combine state-of-the-art diagnostic equipment with decades of hands-on automotive expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Meet The Mastermind Engineers
          </span>
          <h2 className="section-title mt-3">Our Expert Leadership Team</h2>
          <p className="section-subtitle">
            Dedicated professionals committed to precision craftsmanship and vehicle safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md text-center hover:shadow-xl transition-all group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-50 shadow-inner group-hover:scale-105 transition-transform">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {member.role}
              </p>
              <p className="text-xs text-slate-500">
                10+ Years of Automotive Repair & Engineering Leadership
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 mx-4 sm:mx-8 lg:mx-auto max-w-7xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Experience Our Craftsmanship?
          </h2>
          <p className="text-slate-300 text-base mb-8">
            Get in touch with our team for advice, diagnostic appointments, or custom maintenance queries.
          </p>
          <Button asChild size="lg" className="btn-secondary text-base">
            <Link href="/contact" className="inline-flex items-center space-x-2">
              <span>Contact Our Team Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}