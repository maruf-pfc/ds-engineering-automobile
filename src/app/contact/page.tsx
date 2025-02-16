"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Mail, MapPin } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of automotive services including car repair and maintenance, engine diagnostics, car customization, vehicle inspections, and spare parts sales.",
  },
  {
    question: "How long does a typical repair take?",
    answer:
      "The duration of a repair can vary depending on the complexity of the issue. Simple maintenance tasks may take a few hours, while more complex repairs could take several days. We always provide an estimated timeline before starting any work.",
  },
  {
    question: "Do you provide warranties for repairs?",
    answer:
      "Yes, we offer warranties on our repairs and services. The specific warranty terms may vary depending on the type of service provided. Please ask our service advisor for details on our warranty policy.",
  },
  {
    question: "Do you offer emergency car services?",
    answer:
      "Yes, we provide emergency services for urgent automotive issues. Please contact our emergency hotline for immediate assistance.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by calling us, using our online booking form on this page, or visiting our workshop in person. We recommend booking in advance to ensure availability.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
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
        <p className="text-xl text-gray-600 mb-8">
          Get in touch with us for any inquiries or to book a service
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="card p-8"
        >
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
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
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
            <Button type="submit" className="w-full btn-primary animate-in">
              Send Message
            </Button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="card p-8"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Contact Information
          </h2>
          <div className="space-y-4 mb-8">
            <p className="flex items-center text-gray-600">
              <Phone className="mr-2 h-5 w-5 text-blue-500" />
              <span>+880 1935-398517</span>
            </p>
            <p className="flex items-center text-gray-600">
              <Mail className="mr-2 h-5 w-5 text-blue-500" />
              <span>hannanemon2002@gmail.com</span>
            </p>
            <p className="flex items-center text-gray-600">
              <MapPin className="mr-2 h-5 w-5 text-blue-500" />
              <span>Sayednagar, 100ft, Vatara, Dhaka, Bangladesh</span>
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Office Hours
            </h3>
            <p className="text-gray-600">Saturday - Thursday: 9am - 7pm</p>
            <p className="text-gray-600">Friday: Closed</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Our Location
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2108.8669467744403!2d90.43608290393409!3d23.797149606554076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7005938fc6f%3A0xe6d42cd76dccb50d!2sD.S%20Engineering%20Automobile!5e0!3m2!1sen!2sbd!4v1739714817535!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-gray-800">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
