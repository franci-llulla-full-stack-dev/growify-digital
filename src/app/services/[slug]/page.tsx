import { notFound } from "next/navigation";
import Image from "next/image";

const servicesList = [
  {
    id: "web-development",
    image: "/web-service.png",
    title: "Web Development",
    description:
      "We craft custom websites, SaaS platforms, and scalable digital solutions tailored to your business needs. Using modern technologies, we ensure fast performance, responsive design, secure architecture, and seamless integrations with third-party tools. From concept to deployment, our solutions help you grow your online presence and deliver exceptional user experiences.",
  },
  {
    id: "ui-ux-design",
    image: "/ui-service.jpg",
    title: "UI/UX Design",
    description:
      "We create intuitive, visually compelling, and conversion-focused designs that enhance every aspect of the user experience. From wireframes to high-fidelity prototypes, we ensure your digital products are easy to navigate, aesthetically engaging, and optimized to convert visitors into loyal customers. Our designs are user-centered, responsive, and tailored to reflect your brand identity while maximizing engagement and usability.",
  },
  {
    id: "seo-performance",
    image: "/seo-service.jpg",
    title: "SEO & Performance",
    description:
      "We optimize your website’s visibility, loading speed, and search engine ranking to ensure your brand gets discovered by the right audience. Through on-page SEO, technical improvements, content strategy, and performance optimization, we help your website attract organic traffic, provide a seamless user experience, and convert visitors into customers. Our goal is to make your brand not only found but remembered and trusted.",
  },
  {
    id: "branding-identity",
    image: "/branding-service.jpg",
    title: "Branding & Identity",
    description:
     "We craft distinctive logos, comprehensive brand guidelines, and cohesive visual identities that make your brand unforgettable. From typography and color palettes to imagery and tone of voice, we ensure every touchpoint reflects your brand’s personality and values. Our goal is to create a strong, consistent identity that resonates with your audience, builds trust, and sets you apart from the competition."
  },
  {
    id: "digital-marketing",
    image: "/digital-service.jpg",
    title: "Digital Marketing",
    description:
     "We create strategic social media campaigns, targeted ads, and multi-channel marketing initiatives designed to attract and convert real clients for your business. From audience research and content creation to analytics and optimization, we ensure every marketing effort delivers measurable results. Our approach combines creativity and data-driven strategies to increase brand awareness, engagement, and revenue, turning your online presence into a powerful growth engine."
  },
  {
    id: "e-commerce-solutions",
    image: "/e-commerce-service.jpg",
    title: "E-commerce Solutions",
    description:
      "We build powerful online stores that combine sleek design with robust functionality. From seamless payment integrations and automated workflows to advanced analytics and reporting, our e-commerce solutions help you sell more efficiently and understand your customers better. Whether launching a new store or upgrading an existing one, we focus on creating a smooth shopping experience that drives conversions, increases revenue, and supports your business growth."
  },
  // Additional, more specific services
  {
    id: "mobile-app-development",
    image: "/app-service.png",
    title: "Mobile App Development",
    description: "We design and develop custom iOS and Android applications tailored to your business needs. From intuitive interfaces to seamless performance, our apps provide a smooth user experience while integrating with your existing systems and workflows. Whether it’s a consumer-facing app or an internal business tool, we focus on delivering scalable, secure, and high-performing mobile solutions that help your business engage users, streamline processes, and drive growth."
  },
  {
    id: "saas-products",
    image: "/saas-service.png",
    title: "SaaS Products",
    description:
      "We build scalable and secure Software-as-a-Service (SaaS) platforms designed to meet your business goals. Our solutions feature robust backends, smooth user interfaces, and seamless integrations, ensuring reliability and performance at every scale. From subscription management to analytics dashboards, we deliver platforms that provide your users with a seamless experience while giving you full control over your business operations."
  },
  {
    id: "conversion-optimization",
    image: "/conversion-service.png",
    title: "Conversion Optimization",
    description:
     "We help you increase conversions through data-driven strategies, including A/B testing, analytics, and targeted UX improvements. By analyzing user behavior and optimizing your website or app, we ensure every interaction drives more sales, leads, and engagement for your business."
  },
  {
    id: "content-copywriting",
    image: "/content-service.png",
    title: "Content & Copywriting",
    description:
      "We craft professional, high-quality content that captures attention, engages your audience, and drives conversions. From blog posts and articles to social media and marketing copy, every piece is designed to strengthen your brand and turn readers into loyal customers."
  },
];

interface Props {
    params: { slug: string };
}

export default function ServicePage({ params }: Props) {
    const service = servicesList.find(s => s.id === params.slug);
    if (!service) return notFound();
    return (
        <div className="text-center grid grid-cols-1 justify-items-center py-10 px-5 lg:px-20 xl:px-30">
            <h1 className="text-4xl font-extrabold text-[var(--primaryBlue)] mb-6">{service.title}</h1>
            <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={400}
                className="w-40 h-auto object-cover rounded-lg mb-6"
            />
            <p className="text-lg text-gray-300 mb-4">{service.description}</p>
           
        </div>
    )
}
