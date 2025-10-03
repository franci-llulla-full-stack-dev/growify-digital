import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Portofolio from "@/components/Portofolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <hr className="border border-[var(--primaryBlue)]" />
      <About />
      <hr className="border border-[var(--primaryBlue)] my-10" />
      <Services />
      <hr className="border border-[var(--primaryBlue)] my-10" />
      <Portofolio />
      <hr className="border border-[var(--primaryBlue)] my-10" />
      {/* <Testimonials />
      <hr className="border border-[var(--primaryBlue)] my-10" /> */}
      <Contact />
      <hr className="border border-[var(--primaryBlue)]" />
      <Footer />
    </div>
  );
}

