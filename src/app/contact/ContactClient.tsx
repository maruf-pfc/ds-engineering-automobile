"use client";

import { useEffect, useState, useRef } from "react";
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
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, HelpCircle } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

async function getContactData() {
  const res = await fetch("/api/contact");
  if (!res.ok) {
    throw new Error("Failed to fetch contact data");
  }
  return res.json();
}

interface ContactData {
  intro: {
    title: string;
    description: string;
  };
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  officeHours: {
    weekdays: string;
    weekend: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function ContactClient() {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [error, setError] = useState<unknown>(null);
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    getContactData().then(setContactData).catch(setError);
  }, []);

  if (error) {
    throw error;
  }

  if (!contactData) {
    return <LoadingSpinner />;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "user_email") {
      setErrors((prev) => ({
        ...prev,
        user_email: emailRegex.test(value) ? "" : "Invalid email address format",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.user_name.trim()) newErrors.user_name = "Full name is required";
    if (!formData.user_email.trim() || !emailRegex.test(formData.user_email))
      newErrors.user_email = "Valid email address is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Please write a brief message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    if (!validateForm()) return;

    setLoading(true);
    try {
      setSuccessMessage(true);
      setFormData({ user_name: "", user_email: "", phone: "", message: "" });
      setTimeout(() => setSuccessMessage(false), 6000);
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16"
      >
        <span className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <MessageSquare className="w-4 h-4 text-blue-600" />
          <span>Customer Support & Inquiries</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          {contactData.intro.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {contactData.intro.description}
        </p>
      </motion.div>

      {/* Main Grid: Form & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Send Us a Message
          </h2>
          <p className="text-sm text-slate-600 mb-8">
            Have questions regarding car maintenance, cost estimates, or spare parts availability? Fill out the form below.
          </p>

          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-semibold flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thank you! Your message has been sent. We will contact you shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} ref={form} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Your Full Name
                </label>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="e.g. Tanvir Ahmed"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="bg-slate-50 border-slate-200 focus:bg-white text-sm py-3 rounded-xl"
                  required
                />
                {errors.user_name && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.user_name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="tanvir@example.com"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="bg-slate-50 border-slate-200 focus:bg-white text-sm py-3 rounded-xl"
                  required
                />
                {errors.user_email && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.user_email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="+880 1935-398517"
                value={formData.phone}
                onChange={handleChange}
                className="bg-slate-50 border-slate-200 focus:bg-white text-sm py-3 rounded-xl"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Message Details
              </label>
              <Textarea
                name="message"
                placeholder="Describe your vehicle model, issue or service request..."
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-50 border-slate-200 focus:bg-white text-sm rounded-xl"
                required
                rows={5}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="btn-primary w-full text-base py-3"
              disabled={loading}
            >
              {loading ? "Transmitting..." : "Submit Inquiry"}
            </Button>
          </form>
        </motion.div>

        {/* Contact Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-800 pb-4">
              Direct Contact Details
            </h2>
            <div className="space-y-6 text-sm">
              <a
                href="tel:+8801935398517"
                className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-slate-800/80 transition-colors group"
              >
                <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Line</p>
                  <p className="text-base font-bold text-white mt-0.5">{contactData.contactInfo.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${contactData.contactInfo.email}`}
                className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-slate-800/80 transition-colors group"
              >
                <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Official Email</p>
                  <p className="text-base font-bold text-white mt-0.5">{contactData.contactInfo.email}</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-3">
                <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Workshop Address</p>
                  <p className="text-sm font-medium text-slate-200 mt-0.5 leading-relaxed">
                    {contactData.contactInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="flex items-center space-x-3 mb-2 text-emerald-400">
                <Clock className="w-5 h-5" />
                <h3 className="font-bold text-sm">Operating Hours</h3>
              </div>
              <p className="text-xs text-slate-300 pl-8">{contactData.officeHours.weekdays}</p>
              <p className="text-xs text-slate-400 pl-8 mt-1">{contactData.officeHours.weekend}</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-3xl text-slate-800">
            <h3 className="font-bold text-base text-blue-900 mb-2 flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span>Emergency Roadside Support?</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If your vehicle is stalled or requires urgent breakdown assistance in Dhaka, call our priority hotline directly at <strong>+880 1935-398517</strong>.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Map Embed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Find Our Workshop</h2>
          <p className="text-sm text-slate-600 mt-2">Visit us for live diagnostics and vehicle inspection.</p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2108.8669467744403!2d90.43608290393409!3d23.797149606554076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7005938fc6f%3A0xe6d42cd76dccb50d!2sD.S%20Engineering%20Automobile!5e0!3m2!1sen!2sbd!4v1739714817535!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="D.S Engineering Automobile Location Map"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Got Questions?</span>
          </span>
          <h2 className="section-title mt-3">Frequently Asked Questions</h2>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {contactData.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-100 rounded-2xl px-4 py-1">
                <AccordionTrigger className="text-left font-bold text-slate-900 text-sm sm:text-base hover:no-underline hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
