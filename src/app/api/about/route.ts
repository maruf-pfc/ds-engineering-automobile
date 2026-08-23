import { NextResponse } from "next/server";

export async function GET() {
  const aboutData = {
    intro: {
      title: "About D.S Engineering Automobile",
      description: "Delivering excellence in automotive engineering since 2000",
    },
    timeline: [
      {
        year: 2024,
        title: "Eco-Friendly Innovation",
        description:
          "Launched electric vehicle conversion services and eco-friendly solutions.",
      },
      {
        year: 2020,
        title: "20th Anniversary",
        description:
          "Celebrated two decades of service and introduced advanced diagnostic technologies.",
      },
      {
        year: 2010,
        title: "Expansion",
        description:
          "Added state-of-the-art paint shop and custom fabrication area.",
      },
      {
        year: 2000,
        title: "Foundation",
        description: "D.S Engineering Automobile was founded.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Inventory",
        description:
          "Browse thousands of cars, trucks, SUVs, and electric vehicles from trusted brands worldwide.",
      },
      {
        title: "Smart Search Tools",
        description:
          "Filter by price, mileage, year, or features to find your perfect match in seconds.",
      },
      {
        title: "Transparent Reviews",
        description:
          "Unbiased expert reviews, comparisons, and buying guides to empower your decisions.",
      },
      {
        title: "Dealer Partnerships",
        description:
          "Connect with certified dealers for exclusive deals, financing options, and hassle-free transactions.",
      },
      {
        title: "Car Care Resources",
        description:
          "Maintenance tips, DIY guides, and industry news to keep your ride in peak condition.",
      },
    ],
    team: [
      {
        name: "John Doe",
        role: "Chief Engineer",
        image: "/about/team-members/taleb.jpg",
      },
      {
        name: "Jane Smith",
        role: "Lead Mechanic",
        image: "/about/team-members/taleb.jpg",
      },
      {
        name: "Mike Johnson",
        role: "Customer Service Manager",
        image: "/about/team-members/taleb.jpg",
      },
    ],
  };

  return NextResponse.json(aboutData);
}
