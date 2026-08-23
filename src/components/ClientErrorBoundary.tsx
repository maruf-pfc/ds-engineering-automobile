"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ClientErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Caught error:", error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            Something went wrong!
          </h2>
          <p className="mb-4 text-gray-700">
            We apologize for the inconvenience. Please try again later.
          </p>
          <Button onClick={() => setHasError(false)} className="w-full">
            Try again
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
