"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Classic Car Restoration",
    description: "Restored a 1967 Ford Mustang to its former glory.",
    beforeImage: "/about/team-members/taleb.jpg",
    afterImage: "/logo.png",
  },
  {
    id: 2,
    title: "Electric Vehicle Conversion",
    description:
      "Converted a vintage Volkswagen Beetle into a fully electric vehicle.",
    beforeImage: "/about/team-members/taleb.jpg",
    afterImage: "/logo.png",
  },
  {
    id: 3,
    title: "Custom Hot Rod Build",
    description:
      "Built a custom hot rod from the ground up, featuring a powerful V8 engine.",
    beforeImage: "/about/team-members/taleb.jpg",
    afterImage: "/logo.png",
  },
];

interface Project {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="card overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.beforeImage || "/placeholder.svg"}
          alt={`${project.title} - Before`}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src={project.afterImage || "/placeholder.svg"}
          alt={`${project.title} - After`}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </motion.div>
  );
}
