import { Suspense } from "react";
import ClientErrorBoundary from "@/components/ClientErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | DS Engineering Automobile",
  description:
    "Get in touch with DS Engineering Automobile for inquiries, appointments, or support. Find our contact information and frequently asked questions here.",
  keywords:
    "contact, automotive service, appointment booking, customer support, FAQ",
};

export default function Contact() {
  return (
    <ClientErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <ContactClient />
      </Suspense>
    </ClientErrorBoundary>
  );
}
