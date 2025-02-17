import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About D.S Engineering Automobile | Our History and Team",
  description:
    "Learn about D.S Engineering Automobile's history, mission, vision, and our expert team of automotive professionals.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About D.S Engineering Automobile
      </h1>
      <p className="text-xl text-gray-700 mb-8 text-center">
        Delivering excellence in automotive engineering since 2000
      </p>

      {/* Company History */}
      <section className="mb-16 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2000, D.S Engineering Automobile has grown from a small
              local workshop to a leading automotive engineering company. Our
              journey has been marked by continuous innovation, unwavering
              commitment to quality, and a passion for automobiles.
            </p>
            <p className="text-gray-700">
              Over the years, we&apos;ve expanded our services, adopted
              cutting-edge technologies, and built a team of expert engineers
              and technicians to serve our growing clientele.
            </p>
          </div>
          <div className="w-full max-w-md mx-auto mt-4">
            <Image
              src="/about/history.png"
              alt="D.S Engineering History"
              width={500}
              height={300}
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-700">
              To provide top-quality automotive engineering solutions that
              exceed customer expectations, ensure vehicle safety, and promote
              innovation in the automotive industry.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-700">
              To be the leading automotive engineering company, recognized for
              our expertise, innovation, and commitment to excellence in every
              aspect of our service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image
              src="/about/team-members/taleb.jpg"
              alt="John Doe"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-700">Chief Engineer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image
              src="/about/team-members/taleb.jpg"
              alt="Jane Smith"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">Lead Mechanic</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image
              src="/about/team-members/taleb.jpg"
              alt="Mike Johnson"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-700">Customer Service Manager</p>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          Certifications & Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>ISO 9001:2015 Certified</li>
          <li>ASE (Automotive Service Excellence) Certified Technicians</li>
          <li>
            Winner of &quot;Best Automotive Engineering Company&quot; award 2022
          </li>
          <li>
            Recognized for innovative solutions by Automotive Engineering
            Magazine
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience Our Expertise?
        </h2>
        <Button asChild size="lg" className="btn-primary rounded-[5px]">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  );
}
