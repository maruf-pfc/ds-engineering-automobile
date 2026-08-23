import { Suspense } from "react";
import ClientErrorBoundary from "@/components/ClientErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | D.S Engineering Automobile",
  description:
    "Stay updated with the latest automotive news, maintenance tips, and industry insights from D.S Engineering Automobile.",
  keywords:
    "automotive blog, car maintenance tips, industry news, automotive technology",
};

export default function Blog() {
  return (
    <ClientErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <BlogClient />
      </Suspense>
    </ClientErrorBoundary>
  );
}
