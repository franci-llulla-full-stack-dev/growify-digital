import Service from "./Service";
import Button from "../Button";

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
];
const Services = () => {
    return (
        <div className="grid grid-cols-1 px-5 lg:px-20 xl:px-30 bg-[var(--background)]">
            <h1 className="font-bold text-[24px]">Our Services</h1> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
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
            <div className="justify-self-center pt-10 ">
                <Button link="/services" text="View more" />
            </div>
        </div>
    )
}

export default Services;