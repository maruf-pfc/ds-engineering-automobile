"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedTestimonialsDemo } from "@/components/Testimonial";
import { ServiceOverview } from "@/components/ServiceOverview";
import { motion } from "framer-motion";
import ScrollDown from "@/components/ScrollDown";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative my-36 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-gray-700">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Welcome to DS Engineering Automobile
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Expert automotive solutions for all your needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <Button asChild size="lg" className="btn-primary rounded-[5px]">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-outline rounded-[5px]"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
          <ScrollDown />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-700 mb-6">
                DS Engineering Automobile has been providing top-notch
                automotive services since 2000. Our mission is to deliver
                exceptional quality and customer satisfaction in every service
                we provide.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We value integrity, innovation, and a customer-centric approach
                in all our operations.
              </p>
              <Button asChild className="btn-primary rounded-[5px]">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/carr.jpg"
                alt="DS Engineering Automobile Workshop"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceOverview
              title="Car Repair & Maintenance"
              description="Comprehensive repair and maintenance services to keep your vehicle in top condition."
              icon="wrench"
            />
            <ServiceOverview
              title="Engine Diagnostics"
              description="Advanced diagnostic tools to identify and resolve complex engine issues."
              icon="cpu"
            />
            <ServiceOverview
              title="Car Customization"
              description="Personalize your vehicle with our expert customization services."
              icon="paintBucket"
            />
          </div>
          <div className="text-center mt-12">
            <Button asChild className="btn-primary rounded-[5px]">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Expert Mechanics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team of certified mechanics brings years of experience to
                  every job.
                </p>
              </CardContent>
            </Card>
            <Card className="card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Quality Parts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We use only high-quality, genuine parts for all repairs and
                  replacements.
                </p>
              </CardContent>
            </Card>
            <Card className="card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Timely Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We value your time and strive to complete all services
                  promptly.
                </p>
              </CardContent>
            </Card>
            <Card className="card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Customer Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our primary goal is to ensure 100% customer satisfaction with
                  every service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Customers Say</h2>
          <AnimatedTestimonialsDemo />
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-primary text-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Experience Our Service?
          </h2>
          <Button asChild size="lg" className="btn-primary rounded-[5px]">
            <Link href="/contact">Schedule an Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
