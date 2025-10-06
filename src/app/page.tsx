import About from "@/components/About";
import Services from "@/components/service/Services";
import Portofolio from "@/components/portofolio/Portofolio";
// import Testimonials from "@/components/testimonial/Testimonials";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="">
      <About />
      <hr className="border border-[var(--primaryBlue)] my-10" />
      <Services />
      <hr className="border border-[var(--primaryBlue)] my-10" />
      <Portofolio />
      <hr className="border border-[var(--primaryBlue)]" />
      {/* <Testimonials />
      <hr className="border border-[var(--primaryBlue)] my-10" /> */}
      <Contact />
    </div>
  );
}

