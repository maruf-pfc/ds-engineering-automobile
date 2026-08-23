import { Suspense } from "react";
import ClientErrorBoundary from "@/components/ClientErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About D.S Engineering Automobile | Our History and Team",
  description:
    "Learn about D.S Engineering Automobile's history, mission, vision, and our expert team of automotive professionals.",
};

export default function About() {
  return (
    <ClientErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <AboutClient />
      </Suspense>
    </ClientErrorBoundary>
  );
}
