"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Leaf, Cpu, Shield, Gauge, Wrench } from "lucide-react";

const services = [
  {
    title: "Electric Powertrain Design",
    description:
      "Cutting-edge electric motor and battery systems for maximum efficiency and performance.",
    icon: Zap,
    color: "text-neon-blue",
  },
  {
    title: "Sustainable Materials Research",
    description:
      "Developing eco-friendly materials to reduce environmental impact without compromising quality.",
    icon: Leaf,
    color: "text-neon-green",
  },
  {
    title: "Autonomous Driving Systems",
    description:
      "Advanced AI-powered self-driving technology for safer and more efficient transportation.",
    icon: Cpu,
    color: "text-neon-pink",
  },
  {
    title: "Vehicle Cybersecurity",
    description:
      "Robust security solutions to protect connected vehicles from cyber threats.",
    icon: Shield,
    color: "text-neon-yellow",
  },
  {
    title: "Aerodynamics Optimization",
    description:
      "Innovative designs to improve vehicle performance and fuel efficiency through advanced aerodynamics.",
    icon: Gauge,
    color: "text-neon-blue",
  },
  {
    title: "Custom Engineering Solutions",
    description:
      "Tailored engineering services to meet unique automotive challenges and requirements.",
    icon: Wrench,
    color: "text-neon-green",
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          <span className="text-neon-pink">Innovative</span>{" "}
          <span className="text-neon-blue">Engineering</span>{" "}
          <span className="text-neon-green">Services</span>
        </h1>
        <p className="text-xl text-gray-800 mb-8">
          Discover our range of cutting-edge automotive engineering solutions
          designed to shape the future of transportation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Card className="bg-black bg-opacity-50 border-neon-blue hover:border-neon-pink transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold">
                  <service.icon className={`mr-2 h-6 w-6 ${service.color}`} />
                  <span className={service.color}>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-neon-yellow">
          Why Choose Our Services?
        </h2>
        <ul className="text-gray-800 text-lg space-y-4">
          <li>✓ Cutting-edge technology and innovation</li>
          <li>✓ Experienced team of automotive engineers</li>
          <li>✓ Customized solutions for your specific needs</li>
          <li>✓ Commitment to sustainability and eco-friendly practices</li>
          <li>✓ Proven track record of successful projects</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Ready to Revolutionize Your Automotive Project?
        </h2>
        <Button
          asChild
          size="lg"
          className="bg-neon-pink hover:bg-neon-blue text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/contact">Get a Free Consultation</Link>
        </Button>
      </motion.div>
    </div>
  );
}
