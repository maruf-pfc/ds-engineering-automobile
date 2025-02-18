import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About D.S Engineering Automobile | Our History and Team",
  description:
    "Learn about D.S Engineering Automobile's history, mission, vision, and our expert team of automotive professionals.",
};

export default function About() {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded our services to include electric vehicle conversions and
            launched a new eco-friendly automotive solutions division.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/car.jpg"
              alt="Electric Vehicle Conversion"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/car.jpg"
              alt="Eco-friendly Automotive Solutions"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Celebrated our 20th anniversary and introduced advanced diagnostic
            technologies to enhance our repair and maintenance services.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/car.jpg"
              alt="20th Anniversary Celebration"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/car.jpg"
              alt="Advanced Diagnostic Equipment"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2010",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded our facility to include a state-of-the-art paint shop and
            custom fabrication area, allowing us to offer comprehensive vehicle
            customization services.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/car.jpg"
              alt="New Paint Shop"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/car.jpg"
              alt="Custom Fabrication Area"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2000",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            D.S Engineering Automobile was founded with a vision to provide
            top-quality automotive engineering solutions to our local community.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/car.jpg"
              alt="Company Founding"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/car.jpg"
              alt="First Workshop"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Our Journey Through the Years
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          D.S Engineering Automobile has been at the forefront of automotive
          innovation since 2000. Here&apos;s a timeline of our remarkable journey.
        </p>
      </div>

      <Timeline data={timelineData} />

      <section className="mb-16 mt-20">
        <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-700">
              To provide top-quality automotive engineering solutions that
              exceed customer expectations, ensure vehicle safety, and promote
              innovation in the automotive industry.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-700">
              To be the leading automotive engineering company, recognized for
              our expertise, innovation, and commitment to excellence in every
              aspect of our service.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
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
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
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
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
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

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          Certifications & Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>ISO 9001:2015 Certified</li>
          <li>ASE (Automotive Service Excellence) Certified Technicians</li>
          <li>Winner of &quot;Best Automotive Engineering Company&quot; award 2022</li>
          <li>
            Recognized for innovative solutions by Automotive Engineering
            Magazine
          </li>
        </ul>
      </section>

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
