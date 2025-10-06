import Link from "next/link";
import Service from "@/components/service/Service";

const servicesList = [
  {
    id: "web-development",
    image: "/web-service.png",
    title: "Web Development",
    description:
      "Custom websites, SaaS platforms, and scalable digital solutions built with modern tech.",
  },
  {
    id: "ui-ux-design",
    image: "/ui-service.jpg",
    title: "UI/UX Design",
    description:
      "Intuitive, beautiful, and conversion-focused designs that enhance user experience.",
  },
  {
    id: "seo-performance",
    image: "/seo-service.jpg",
    title: "SEO & Performance",
    description:
      "Optimize visibility, speed, and ranking so your brand gets found and grows.",
  },
  {
    id: "branding-identity",
    image: "/branding-service.jpg",
    title: "Branding & Identity",
    description:
      "Logo design, brand guidelines, and a visual identity that makes you unforgettable.",
  },
  {
    id: "digital-marketing",
    image: "/digital-service.jpg",
    title: "Digital Marketing",
    description:
      "Social media, ads, and campaigns that drive real clients to your business.",
  },
  {
    id: "e-commerce-solutions",
    image: "/e-commerce-service.jpg",
    title: "E-commerce Solutions",
    description:
      "Powerful online stores with payment integrations, automation, and analytics.",
  },
  // Additional, more specific services
  {
    id: "mobile-app-development",
    image: "/app-service.png",
    title: "Mobile App Development",
    description: "iOS & Android apps tailored to your business needs.",
  },
  {
    id: "saas-products",
    image: "/saas-service.png",
    title: "SaaS Products",
    description:
      "Build scalable SaaS platforms with secure backend and smooth UX.",
  },
  {
    id: "conversion-optimization",
    image: "/conversion-service.png",
    title: "Conversion Optimization",
    description:
      "A/B testing, analytics, and UX tweaks to increase sales and leads.",
  },
  {
    id: "content-copywriting",
    image: "/content-service.png",
    title: "Content & Copywriting",
    description:
      "Professional content that engages users and drives conversions.",
  },
];

export default function Services() {
  return (
    <div className="px-5 py-16 lg:px-20 xl:px-30">
      {/* Page Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[var(--primaryBlue)] mb-4">
          What We Offer
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          From building stunning websites to optimizing your digital presence, 
          we provide comprehensive solutions that help your business grow. 
          Explore our range of services below.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesList.map((service, index) => (
            <Service
              key={index}
              id={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
        ))}
      </div>

      <hr className="border border-[var(--primaryBlue)] mt-20" />
    </div>
  );
}
