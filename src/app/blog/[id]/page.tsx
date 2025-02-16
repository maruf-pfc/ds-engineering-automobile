"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Electric Vehicles",
    content: `
      <p class="mb-4">The automotive industry is undergoing a significant transformation with the rise of electric vehicles (EVs). As concerns about climate change and air pollution grow, more consumers and manufacturers are turning to EVs as a sustainable transportation solution.</p>
      
      <h2 class="mt-8 mb-4">Key Trends in the EV Market</h2>
      <ul class="list-disc list-inside mb-4">
        <li>Increased range and battery efficiency</li>
        <li>Faster charging technologies</li>
        <li>Integration of autonomous driving features</li>
        <li>Expansion of charging infrastructure</li>
      </ul>
      
      <p class="mb-4">One of the most exciting developments in the EV space is the improvement in battery technology. New chemistries and manufacturing processes are leading to batteries with higher energy density, longer lifespan, and faster charging capabilities.</p>
      
      <div class="video-container mb-8">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <p class="mb-4">As we look to the future, it's clear that electric vehicles will play a crucial role in shaping the automotive landscape. With ongoing advancements in technology and increasing consumer adoption, the future of transportation is electric, efficient, and environmentally friendly.</p>
    `,
    image: "/car.jpg",
    date: "2023-05-15",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Advancements in Autonomous Vehicles",
    content: `
      <p class="mb-4">Autonomous vehicles (AVs) are set to revolutionize the way we travel. With advancements in AI and machine learning, AVs are becoming more reliable and efficient.</p>
      
      <h2 class="mt-8 mb-4">Key Developments in AV Technology</h2>
      <ul class="list-disc list-inside mb-4">
        <li>Improved sensor technology</li>
        <li>Enhanced AI algorithms for better decision-making</li>
        <li>Increased safety features</li>
        <li>Integration with smart city infrastructure</li>
      </ul>
      
      <p class="mb-4">The future of AVs looks promising, with potential benefits including reduced traffic congestion, lower emissions, and increased accessibility.</p>
    `,
    image: "/autonomous.jpg",
    date: "2023-06-10",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "The Impact of AI on the Automotive Industry",
    content: `
      <p class="mb-4">Artificial Intelligence (AI) is transforming the automotive industry by enhancing vehicle performance, safety, and user experience.</p>
      
      <h2 class="mt-8 mb-4">AI Applications in Automotive</h2>
      <ul class="list-disc list-inside mb-4">
        <li>Predictive maintenance</li>
        <li>Driver assistance systems</li>
        <li>Personalized in-car experiences</li>
        <li>Optimized manufacturing processes</li>
      </ul>
      
      <p class="mb-4">AI is not only improving the functionality of vehicles but also reshaping the entire automotive ecosystem.</p>
    `,
    image: "/ai-automotive.jpg",
    date: "2023-07-20",
    author: "Alex Johnson",
  },
  // Add more blog posts here...
];

export default function BlogPost() {
  const params = useParams();
  const postId = Number.parseInt(params.id as string);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return <div className="text-center text-xl py-20">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        {post.title}
      </h1>
      <div className="text-gray-500 mb-4 text-center">
        <span>{post.date}</span> | <span>{post.author}</span>
      </div>
      <Image
        src={post.image || "/car.jpg"}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-auto object-cover rounded-lg mb-8 shadow-lg"
      />
      <div
        className="prose lg:prose-xl mx-auto text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
