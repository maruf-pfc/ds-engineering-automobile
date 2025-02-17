// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Heading,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Row,
//   Section,
//   Tailwind,
//   Text,
// } from "@react-email/components";
// import type * as React from "react";

// interface DSEngineeringEmailProps {
//   userName: string;
//   serviceType?: string;
//   nextSteps?: {
//     id: number;
//     description: React.ReactNode;
//   }[];
// }

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "http://localhost:3000/";

// const PropDefaults: DSEngineeringEmailProps = {
//   userName: "Valued Customer",
//   serviceType: "our services",
//   nextSteps: [
//     {
//       id: 1,
//       description: (
//         <li className="mb-20" key={1}>
//           <strong>Prepare your vehicle information.</strong> Have your vehicle
//           make, model, and year ready for our team to better assist you.
//         </li>
//       ),
//     },
//     {
//       id: 2,
//       description: (
//         <li className="mb-20" key={2}>
//           <strong>Describe any specific issues.</strong> If you're experiencing
//           particular problems with your vehicle, note them down to discuss with
//           our technicians.
//         </li>
//       ),
//     },
//     {
//       id: 3,
//       description: (
//         <li className="mb-20" key={3}>
//           <strong>Check your schedule.</strong> Our team will be reaching out to
//           schedule an appointment. Consider your availability for the upcoming
//           week.
//         </li>
//       ),
//     },
//     {
//       id: 4,
//       description: (
//         <li className="mb-20" key={4}>
//           <strong>Explore our services.</strong> While you wait, feel free to
//           browse our{" "}
//           <Link href="https://www.dsengineering.com/services">
//             full range of services
//           </Link>{" "}
//           to see if there's anything else we can help you with.
//         </li>
//       ),
//     },
//   ],
// };

// export const DSEngineeringEmail = ({
//   userName = PropDefaults.userName,
//   serviceType = PropDefaults.serviceType,
//   nextSteps = PropDefaults.nextSteps,
// }: DSEngineeringEmailProps) => {
//   return (
//     <Html>
//       <Head />
//       <Tailwind
//         config={{
//           theme: {
//             extend: {
//               colors: {
//                 brand: "#3b82f6",
//                 offwhite: "#f3f4f6",
//               },
//               spacing: {
//                 0: "0px",
//                 20: "20px",
//                 45: "45px",
//               },
//             },
//           },
//         }}
//       >
//         <Preview>Thank you for contacting D.S Engineering Automobile</Preview>
//         <Body className="bg-offwhite text-base font-sans">
//           <Container className="bg-white p-45">
//             <Heading className="text-center my-0 leading-8">
//               Thank You for Contacting D.S Engineering Automobile
//             </Heading>

//             <Section>
//               <Row>
//                 <Text className="text-base">Dear {userName},</Text>
//                 <Text className="text-base">
//                   Thank you for your interest in {serviceType} at D.S
//                   Engineering Automobile. We appreciate you reaching out to us
//                   and we're excited to assist you with your automotive needs.
//                 </Text>
//                 <Text className="text-base">
//                   Our team will review your request and get back to you shortly
//                   via phone or email to discuss your needs in more detail and
//                   schedule an appointment if necessary.
//                 </Text>
//                 <Text className="text-base">
//                   While you wait, here are some steps you can take:
//                 </Text>
//               </Row>
//             </Section>

//             <ul>{nextSteps?.map(({ description }) => description)}</ul>

//             <Section className="text-center">
//               <Button
//                 className="bg-brand text-white rounded-lg py-3 px-[18px]"
//                 href="https://ds-engineering-automobile.vercel.app/services"
//               >
//                 Explore Our Services
//               </Button>
//             </Section>

//             <Section className="mt-45">
//               <Text className="text-base">
//                 If you have any urgent questions, please don't hesitate to call
//                 us at +8801935398517
//               </Text>
//               <Text className="text-base">
//                 We look forward to serving you and your vehicle soon!
//               </Text>
//               <Text className="text-base">
//                 Best regards,
//                 <br />
//                 The D.S Engineering Automobile Team
//               </Text>
//             </Section>
//           </Container>

//           <Container className="mt-20">
//             <Text className="text-center text-gray-400 mb-45">
//               Sayednagar, 100ft, Vatara, Dhaka, Bangladesh
//             </Text>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// };

// export default DSEngineeringEmail;
