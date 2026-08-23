import { Suspense } from "react";
import ClientErrorBoundary from "@/components/ClientErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Our Services | D.S Engineering Automobile",
  description:
    "Explore our comprehensive range of automotive services including car repair, maintenance, diagnostics, customization, and more.",
};

export default function Services() {
  return (
    <ClientErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesClient />
      </Suspense>
    </ClientErrorBoundary>
  );
}
