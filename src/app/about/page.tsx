"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          <span className="text-neon-pink">Driving</span> the{" "}
          <span className="text-neon-blue">Future</span> of{" "}
          <span className="text-neon-green">Automotive</span> Engineering
        </h1>
        <p className="text-xl text-gray-800 mb-8">
          At D.S Engineering Automobile, we&apos;re not just creating vehicles; we&apos;re
          shaping the future of transportation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-neon-yellow">
            Our Story
          </h2>
          <p className="text-gray-800 mb-4">
            Founded in 2000 by visionary engineer Dr. Sarah Davis, D.S
            Engineering Automobile has been at the forefront of automotive
            innovation for over two decades. What started as a small research
            team has grown into a global leader in cutting-edge vehicle
            technology.
          </p>
          <p className="text-gray-800 mb-4">
            Our journey has been marked by groundbreaking achievements, from
            developing one of the first commercially viable electric sports cars
            to pioneering advanced autonomous driving systems. Today, we
            continue to push the boundaries of what&apos;s possible in automotive
            engineering.
          </p>
        </div>
        <Image
          src="https://www.shutterstock.com/image-photo/black-man-mechanic-working-under-600nw-1845040702.jpg"
          alt="D.S Engineering Headquarters"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold mb-4 text-neon-blue">
          Our Mission
        </h2>
        <p className="text-gray-800 mb-4">
          Our mission is to revolutionize the automotive industry through
          innovative engineering solutions, sustainable practices, and
          exceptional customer service. We strive to create vehicles that are
          not only technologically advanced but also environmentally
          responsible.
        </p>
        <h2 className="text-3xl font-semibold mb-4 text-neon-green">
          Our Vision
        </h2>
        <p className="text-gray-800 mb-4">
          We envision a future where transportation is clean, efficient, and
          accessible to all. Our goal is to be at the forefront of this
          transformation, driving progress and setting new standards in the
          industry.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg border border-neon-pink">
          <h3 className="text-2xl font-semibold mb-4 text-neon-pink">
            Innovation
          </h3>
          <p className="text-gray-800">
            We&apos;re constantly pushing the boundaries of what&apos;s possible in
            automotive technology, from AI-driven systems to revolutionary
            materials.
          </p>
        </div>
        <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg border border-neon-blue">
          <h3 className="text-2xl font-semibold mb-4 text-neon-blue">
            Sustainability
          </h3>
          <p className="text-gray-800">
            Our commitment to the environment drives us to develop eco-friendly
            solutions that reduce the carbon footprint of our vehicles.
          </p>
        </div>
        <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg border border-neon-green">
          <h3 className="text-2xl font-semibold mb-4 text-neon-green">
            Excellence
          </h3>
          <p className="text-gray-800">
            We strive for excellence in everything we do, from design and
            engineering to customer service and support.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Join Us in Shaping the Future
        </h2>
        <Button
          asChild
          size="lg"
          className="bg-neon-yellow hover:bg-neon-green text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/contact">Get Involved</Link>
        </Button>
      </motion.div>
    </div>
  );
}
