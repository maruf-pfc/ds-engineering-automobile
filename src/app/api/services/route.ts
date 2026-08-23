import { NextResponse } from "next/server";

export async function GET() {
  const servicesData = {
    intro: {
      title: "Our Services",
      description:
        "Discover our range of professional automotive services designed to keep your vehicle in top condition",
    },
    services: [
      {
        title: "Car Repair & Maintenance",
        description:
          "Comprehensive repair and maintenance services including oil changes, tire replacement, and brake services.",
        icon: "Wrench",
        details: [
          "Oil changes",
          "Tire replacement and rotation",
          "Brake services",
          "Regular maintenance checks",
        ],
      },
      {
        title: "Engine Diagnostics & Repair",
        description:
          "Advanced diagnostic tools to identify and resolve complex engine issues, including check engine light problems and engine tuning.",
        icon: "Cpu",
        details: [
          "Check engine light diagnostics",
          "Engine performance tuning",
          "Fuel system repair",
          "Electrical system diagnostics",
        ],
      },
      {
        title: "Car Modification & Customization",
        description:
          "Personalize your vehicle with our expert customization services, including paint jobs and performance upgrades.",
        icon: "PaintBucket",
        details: [
          "Custom paint jobs",
          "Performance upgrades",
          "Interior modifications",
          "Audio system installations",
        ],
      },
      {
        title: "Car Inspection & Safety Checks",
        description:
          "Comprehensive vehicle inspections and road safety assessments to ensure your car is in top condition.",
        icon: "Shield",
        details: [
          "Pre-purchase inspections",
          "Annual safety checks",
          "Emissions testing",
          "Road worthiness certificates",
        ],
      },
      {
        title: "Spare Parts Sales",
        description:
          "Wide range of genuine automobile parts available for various makes and models.",
        icon: "Cog",
        details: [
          "OEM parts",
          "Aftermarket parts",
          "Performance parts",
          "Accessories",
        ],
      },
    ],
  };

  return NextResponse.json(servicesData);
}
