"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Electric Vehicles",
    excerpt:
      "Exploring the latest trends and innovations in the electric vehicle industry.",
    image: "/car.jpg",
    date: "2023-05-15",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Maintenance Tips for Classic Cars",
    excerpt:
      "Essential maintenance tips to keep your classic car in top condition.",
    image: "/car.jpg",
    date: "2023-05-10",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "The Art of Custom Car Painting",
    excerpt:
      "A deep dive into the techniques and trends of custom car painting.",
    image: "/car.jpg",
    date: "2023-05-05",
    author: "Mike Johnson",
  },
];

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 rounded-md">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      className="card overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{post.date}</span>
          <span>{post.author}</span>
        </div>
        <Link
          href={`/blog/${post.id}`}
          className="btn-primary mt-4 inline-block"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}
