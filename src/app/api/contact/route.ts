import { NextResponse } from "next/server";

export async function GET() {
  const contactData = {
    intro: {
      title: "Contact Us",
      description:
        "Get in touch with us for any inquiries or to book a service",
    },
    contactInfo: {
      phone: "+880 1935-398517",
      email: "hannanemon2002@gmail.com",
      address: "Sayednagar, 100ft, Vatara, Dhaka, Bangladesh",
    },
    officeHours: {
      weekdays: "Saturday - Thursday: 9am - 7pm",
      weekend: "Friday: Closed",
    },
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "We offer a wide range of automotive services including car repair and maintenance, engine diagnostics, car customization, vehicle inspections, and spare parts sales.",
      },
      {
        question: "How long does a typical repair take?",
        answer:
          "The duration of a repair can vary depending on the complexity of the issue. Simple maintenance tasks may take a few hours, while more complex repairs could take several days. We always provide an estimated timeline before starting any work.",
      },
      {
        question: "Do you provide warranties for repairs?",
        answer:
          "Yes, we offer warranties on our repairs and services. The specific warranty terms may vary depending on the type of service provided. Please ask our service advisor for details on our warranty policy.",
      },
      {
        question: "Do you offer emergency car services?",
        answer:
          "Yes, we provide emergency services for urgent automotive issues. Please contact our emergency hotline for immediate assistance.",
      },
      {
        question: "How can I book an appointment?",
        answer:
          "You can book an appointment by calling us, using our online booking form on this page, or visiting our workshop in person. We recommend booking in advance to ensure availability.",
      },
    ],
  };

  return NextResponse.json(contactData);
}
