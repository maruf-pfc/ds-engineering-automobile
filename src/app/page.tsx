import { Suspense } from "react";
import ClientErrorBoundary from "@/components/ClientErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "DS Engineering Automobile | Expert Automotive Solutions",
  description:
    "DS Engineering Automobile offers professional automotive engineering solutions. Specializing in car repair, maintenance, and customization.",
  keywords:
    "automotive engineering, car repair, engine diagnostics, car customization, vehicle maintenance",
};

export default function Home() {
  return (
    <ClientErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <HomeClient />
      </Suspense>
    </ClientErrorBoundary>
  );
}
