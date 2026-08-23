"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Electric Vehicles",
    content: `
      <p className="text-slate-700 leading-relaxed text-base mb-6">The automotive industry is undergoing a significant transformation with the rise of electric vehicles (EVs). As concerns about climate change and air pollution grow, more consumers and manufacturers are turning to EVs as a sustainable transportation solution.</p>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Trends in the EV Market</h2>
      <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
        <li>Increased range and battery efficiency with high-density cells</li>
        <li>Ultra-fast 400kW DC charging technologies</li>
        <li>Integration of autonomous driving features and smart telematics</li>
        <li>Expansion of nationwide charging station networks</li>
      </ul>
      
      <p className="text-slate-700 leading-relaxed text-base mb-6">One of the most exciting developments in the EV space is the improvement in battery technology. New chemistries and manufacturing processes are leading to batteries with higher energy density, longer lifespan, and faster charging capabilities.</p>
      
      <p className="text-slate-700 leading-relaxed text-base mb-6">At D.S Engineering Automobile, our certified technicians are fully trained in high-voltage EV diagnostic systems, battery health checks, and motor calibration.</p>
    `,
    image: "/blog/ev-future.jpg",
    date: "2024-05-15",
    author: "John Doe",
    category: "Technology",
  },
  {
    id: 2,
    title: "Maintenance Tips for Classic Cars",
    content: `
      <p className="text-slate-700 leading-relaxed text-base mb-6">Classic cars require specialized care to maintain their mechanical integrity and aesthetic appeal. Regular fluid checks, proper winterization, and carb tuning are vital.</p>
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Essential Maintenance Checklist</h2>
      <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
        <li>Change engine oil with zinc-additive oil formulation</li>
        <li>Inspect fuel lines for dry rot and degradation</li>
        <li>Flush brake lines annually to prevent moisture corrosion</li>
        <li>Maintain proper tire pressure and alignment</li>
      </ul>
    `,
    image: "/blog/classic-car.jpg",
    date: "2024-05-10",
    author: "Jane Smith",
    category: "Restoration",
  },
  {
    id: 3,
    title: "The Art of Custom Car Painting",
    content: `
      <p className="text-slate-700 leading-relaxed text-base mb-6">A flawless custom paint job begins long before the spray gun touches the body panels. Precision surface sanding, primer sealers, and dust-free booth environments are non-negotiable.</p>
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Multi-Stage Painting Process</h2>
      <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
        <li>Stage 1: Complete paint stripping and rust remediation</li>
        <li>Stage 2: High-build epoxy primer application</li>
        <li>Stage 3: Base coat color application with metallic pigments</li>
        <li>Stage 4: Ultra-clear polyurethane topcoat & ceramic polishing</li>
      </ul>
    `,
    image: "/blog/car-painting.jpg",
    date: "2024-05-05",
    author: "Mike Johnson",
    category: "Custom Paint",
  },
];

export default function BlogPost() {
  const params = useParams();
  const postId = Number.parseInt(params.id as string) || 1;
  const post = blogPosts.find((p) => p.id === postId) || blogPosts[0];

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <div className="mb-8 pt-4">
          <Button asChild variant="outline" size="sm" className="btn-outline">
            <Link href="/blog" className="inline-flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>
          </Button>
        </div>

        {/* Header Information */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              <span>{post.category}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-sm text-slate-500 pb-6 border-b border-slate-200">
            <span className="flex items-center space-x-2">
              <User className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-slate-700">{post.author}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>{post.date}</span>
            </span>
          </div>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-80 sm:h-[400px] rounded-3xl overflow-hidden mb-12 shadow-xl border border-slate-200">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md mb-12">
          <div
            className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Article Footer & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 p-6 rounded-2xl border border-slate-200 gap-4">
          <div className="text-xs font-semibold text-slate-600">
            Enjoyed reading this article? Share it with fellow car enthusiasts!
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-xs font-bold inline-flex items-center space-x-2"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    url: window.location.href,
                  });
                } else {
                  alert("Link copied to clipboard!");
                }
              }}
            >
              <Share2 className="w-4 h-4 text-blue-600" />
              <span>Share Article</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
