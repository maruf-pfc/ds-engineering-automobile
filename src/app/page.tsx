"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const cars = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    image:
      "https://garirbazar.s3.amazonaws.com/uploads/post/featured_image/78/inno.png",
  },
  {
    id: 2,
    name: "Suzuki Car",
    image:
      "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/obenew4c7bwrgbchzojj",
  },
  {
    id: 3,
    name: "Prado Car",
    image:
      "https://www.thedrive.com/wp-content/uploads/2023/06/08/Land-Cruiser-Prado-Hero-1.jpg?quality=85",
  },
  {
    id: 4,
    name: "Prado Car",
    image:
      "https://www.thedrive.com/wp-content/uploads/2023/06/08/Land-Cruiser-Prado-Hero-1.jpg?quality=85",
  },
  {
    id: 6,
    name: "Toyota Innova Crysta",
    image:
      "https://garirbazar.s3.amazonaws.com/uploads/post/featured_image/78/inno.png",
  },
  {
    id: 5,
    name: "Suzuki Car",
    image:
      "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/obenew4c7bwrgbchzojj",
  },
];

export default function Home() {
  const router = useRouter();

  const handleBooking = (service: string) => {
    router.push(`/contact?service=${service}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Welcome to D.S Engineering Automobile
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Professional solutions for all your automotive needs
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/services">Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Featured Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                width={400}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <Button onClick={() => handleBooking(`Book ${car.name}`)}>
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Repair</h3>
            <p className="text-gray-700 mb-4">
              Expert repair services for all makes and models
            </p>
            <Button onClick={() => handleBooking("Repair Service")}>
              Book Repair
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Maintenance</h3>
            <p className="text-gray-700 mb-4">
              Regular maintenance to keep your vehicle in top condition
            </p>
            <Button onClick={() => handleBooking("Maintenance Service")}>
              Schedule Maintenance
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Customization</h3>
            <p className="text-gray-700 mb-4">
              Personalize your vehicle with our customization services
            </p>
            <Button onClick={() => handleBooking("Customization Service")}>
              Get a Quote
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Need Immediate Assistance?
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          Our expert team is just a phone call away
        </p>
        <Button asChild size="lg" variant="outline">
          <a href="tel:+1234567890">Call Now: (123) 456-7890</a>
        </Button>
      </motion.div>
    </div>
  );
}
