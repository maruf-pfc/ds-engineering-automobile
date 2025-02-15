"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setFormData((prevState) => ({
        ...prevState,
        service: service,
        message: `I'm interested in booking the following service: ${service}`,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or a third-party service
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", service: "", message: "" });
    alert("Thank you for your message. Our team will contact you soon.");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-xl text-gray-700 mb-8">
          Get in touch with us for any inquiries or to book a service
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                type="text"
                name="service"
                placeholder="Service Requested"
                value={formData.service}
                onChange={handleChange}
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Contact Information
          </h2>
          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              <Phone className="mr-2 h-5 w-5" />
              <span>(123) 456-7890</span>
            </p>
            <p className="flex items-center text-gray-700">
              <Mail className="mr-2 h-5 w-5" />
              <span>info@dsengineering.com</span>
            </p>
            <p className="flex items-center text-gray-700">
              <MapPin className="mr-2 h-5 w-5" />
              <span>123 Engineering Street, Automobile City, AC 12345</span>
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Office Hours
            </h3>
            <p className="text-gray-700">Monday - Friday: 9am - 6pm</p>
            <p className="text-gray-700">Saturday: 10am - 2pm</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
