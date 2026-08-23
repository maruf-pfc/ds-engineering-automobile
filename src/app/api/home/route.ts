import { NextResponse } from "next/server";

export async function GET() {
  // In a real application, you would fetch this data from a database
  const homeData = {
    hero: {
      title: "Welcome to DS Engineering Automobile",
      subtitle: "Expert automotive solutions for all your needs",
    },
    services: [
      {
        title: "Car Repair & Maintenance",
        description: "Comprehensive repair and maintenance services.",
        icon: "wrench",
      },
      {
        title: "Engine Diagnostics",
        description:
          "Advanced diagnostic tools to identify and resolve complex engine issues.",
        icon: "cpu",
      },
      {
        title: "Car Customization",
        description:
          "Personalize your vehicle with our expert customization services.",
        icon: "paintBucket",
      },
    ],
    testimonials: [
      {
        quote:
          "DS Engineering provided exceptional service. They fixed my car quickly and at a reasonable price.",
        author: "John Doe",
      },
      {
        quote:
          "I've been a customer for years, and I always receive top-notch service. Highly recommended!",
        author: "Jane Smith",
      },
    ],
  };

  return NextResponse.json(homeData);
}
