import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonial } from "@/components/Testimonial";
import { ServiceOverview } from "@/components/ServiceOverview";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to DS Engineering Automobile
        </h1>
        <p className="text-xl mb-8">
          Expert automotive solutions for all your needs
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Book a Service</Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="px-4">
            <p className="text-gray-700 mb-4 leading-relaxed">
              DS Engineering Automobile has been providing top-notch automotive
              services since 2000. Our mission is to deliver exceptional quality
              and customer satisfaction in every service we provide.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We value integrity, innovation, and a customer-centric approach in
              all our operations.
            </p>
            <Button asChild className="mt-4">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/about/team-members/taleb.jpg"
              alt="DS Engineering Automobile Workshop"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceOverview
            title="Car Repair & Maintenance"
            description="Comprehensive repair and maintenance services to keep your vehicle in top condition."
            icon="wrench"
          />
          <ServiceOverview
            title="Engine Diagnostics"
            description="Advanced diagnostic tools to identify and resolve complex engine issues."
            icon="cpu"
          />
          <ServiceOverview
            title="Car Customization"
            description="Personalize your vehicle with our expert customization services."
            icon="paintBucket"
          />
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Expert Mechanics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team of certified mechanics brings years of experience to
                every job.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quality Parts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We use only high-quality, genuine parts for all repairs and
                replacements.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Timely Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We value your time and strive to complete all services promptly.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our primary goal is to ensure 100% customer satisfaction with
                every service.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonial
            quote="DS Engineering provided exceptional service. They fixed my car quickly and at a reasonable price."
            author="John Doe"
          />
          <Testimonial
            quote="I've been a customer for years, and I always receive top-notch service. Highly recommended!"
            author="Jane Smith"
          />
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/testimonials">Read More Testimonials</Link>
          </Button>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">
          Ready to Experience Our Service?
        </h2>
        <Button asChild size="lg">
          <Link href="/contact">Schedule an Appointment</Link>
        </Button>
      </section>
    </div>
  );
}
