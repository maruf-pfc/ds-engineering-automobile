"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center bg-gradient-to-b">
      <div className="max-w-md w-full px-6 py-12 shadow-xl rounded-lg bg-white my-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            We're sorry, the page you requested could not be found. Please go
            back to the homepage or contact us for assistance.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Go Back
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
