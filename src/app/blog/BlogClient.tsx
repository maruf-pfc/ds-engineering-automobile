"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight, BookOpen } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
}

interface BlogData {
  intro: {
    title: string;
    description: string;
  };
  posts: Post[];
}

async function getBlogData() {
  const res = await fetch("/api/blog");
  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }
  return res.json();
}

export default function BlogClient() {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    getBlogData().then(setBlogData).catch(setError);
  }, []);

  if (error) {
    throw error;
  }

  if (!blogData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>Automotive Insights & News</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          {blogData.intro.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {blogData.intro.description}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogPostCard({ post }: { post: Post }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
    >
      <div>
        <div className="relative w-full h-52 overflow-hidden bg-slate-100">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
            Engineering
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium mb-3">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <User className="w-3.5 h-3.5 text-emerald-600" />
              <span>{post.author}</span>
            </span>
          </div>

          <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
            {post.title}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <Link
          href={`/blog/${post.id}`}
          className="w-full inline-flex items-center justify-center space-x-2 py-2.5 bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-bold rounded-xl transition-all shadow-xs"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
