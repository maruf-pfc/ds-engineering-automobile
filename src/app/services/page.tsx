import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Wrench, Cpu, PaintBucket, Shield, Cog } from "lucide-react";

export const metadata = {
  title: "Our Services | D.S Engineering Automobile",
  description:
    "Explore our comprehensive range of automotive services including car repair, maintenance, diagnostics, customization, and more.",
};

const services = [
  {
    title: "Car Repair & Maintenance",
    description:
      "Comprehensive repair and maintenance services including oil changes, tire replacement, and brake services.",
    icon: Wrench,
    details: [
      "Oil changes",
      "Tire replacement and rotation",
      "Brake services",
      "Regular maintenance checks",
    ],
    estimatedCost: "$50 - $500",
    estimatedDuration: "1 hour - 1 day",
  },
  {
    title: "Engine Diagnostics & Repair",
    description:
      "Advanced diagnostic tools to identify and resolve complex engine issues, including check engine light problems and engine tuning.",
    icon: Cpu,
    details: [
      "Check engine light diagnostics",
      "Engine performance tuning",
      "Fuel system repair",
      "Electrical system diagnostics",
    ],
    estimatedCost: "$100 - $1000",
    estimatedDuration: "2 hours - 3 days",
  },
  {
    title: "Car Modification & Customization",
    description:
      "Personalize your vehicle with our expert customization services, including paint jobs and performance upgrades.",
    icon: PaintBucket,
    details: [
      "Custom paint jobs",
      "Performance upgrades",
      "Interior modifications",
      "Audio system installations",
    ],
    estimatedCost: "$500 - $5000+",
    estimatedDuration: "1 day - 2 weeks",
  },
  {
    title: "Car Inspection & Safety Checks",
    description:
      "Comprehensive vehicle inspections and road safety assessments to ensure your car is in top condition.",
    icon: Shield,
    details: [
      "Pre-purchase inspections",
      "Annual safety checks",
      "Emissions testing",
      "Road worthiness certificates",
    ],
    estimatedCost: "$50 - $200",
    estimatedDuration: "1 - 3 hours",
  },
  {
    title: "Spare Parts Sales",
    description:
      "Wide range of genuine automobile parts available for various makes and models.",
    icon: Cog,
    details: [
      "OEM parts",
      "Aftermarket parts",
      "Performance parts",
      "Accessories",
    ],
    estimatedCost: "Varies by part",
    estimatedDuration: "Immediate - 1 week for special orders",
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
      <p className="text-xl text-gray-700 mb-12 text-center">
        Discover our range of professional automotive services designed to keep
        your vehicle in top condition
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold">
                <service.icon className="mr-2 h-6 w-6" />
                <span>{service.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {service.description}
              </CardDescription>
              <h4 className="font-semibold mb-2">Services Include:</h4>
              <ul className="list-disc list-inside mb-4">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <p>
                <strong>Estimated Cost:</strong> {service.estimatedCost}
              </p>
              <p>
                <strong>Estimated Duration:</strong> {service.estimatedDuration}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Book a Service</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="service"
              className="block text-gray-700 font-bold mb-2"
            >
              Select Service
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Choose a service</option>
              {services.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 font-bold mb-2"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <Button type="submit" className="w-full">
            Book Now
          </Button>
        </form>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
}
