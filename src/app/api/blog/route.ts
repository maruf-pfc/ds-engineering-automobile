import { NextResponse } from "next/server";

export async function GET() {
  const blogData = {
    intro: {
      title: "Our Blog",
      description:
        "Stay updated with the latest automotive news, maintenance tips, and industry insights from D.S Engineering Automobile.",
    },
    posts: [
      {
        id: 1,
        title: "The Future of Electric Vehicles",
        excerpt:
          "Exploring the latest trends, battery innovations, and charging infrastructure in the electric vehicle industry.",
        image: "/blog/ev-future.jpg",
        date: "2024-05-15",
        author: "John Doe",
      },
      {
        id: 2,
        title: "Maintenance Tips for Classic Cars",
        excerpt:
          "Essential mechanical maintenance and preservation tips to keep your classic muscle car in peak performance.",
        image: "/blog/classic-car.jpg",
        date: "2024-05-10",
        author: "Jane Smith",
      },
      {
        id: 3,
        title: "The Art of Custom Car Painting",
        excerpt:
          "A deep dive into multi-coat metallic painting techniques, clear-coat finishing, and custom spray booth procedures.",
        image: "/blog/car-painting.jpg",
        date: "2024-05-05",
        author: "Mike Johnson",
      },
    ],
  };

  return NextResponse.json(blogData);
}
