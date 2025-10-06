const Footer = () => {
  return (
    <>
      <hr className="border border-[var(--primaryBlue)]" />
      <footer className="bg-[var(--foreground)] text-white py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-3 gap-5">
          {/* Left: About / Description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-2">Growify Digital</h2>
            <p className="text-sm md:text-base card-text">
              We create premium websites, SaaS platforms, and marketing solutions
              that help your brand grow and stand out online.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-6">
            <div className="grid grid-cols-1 gap-2">
              <h3 className="font-semibold">Services</h3>
              <a href="#" className="text-gray-300 hover:text-white transition">Web Development</a>
              <a href="#" className="text-gray-300 hover:text-white transition">UI/UX Design</a>
              <a href="#" className="text-gray-300 hover:text-white transition">SEO & Marketing</a>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <h3 className="font-semibold">Company</h3>
              <a href="#" className="text-gray-300 hover:text-white transition">About Us</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Portfolio</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>
          </div>

          {/* Right: Socials */}
          <div className="col-span-1 grid grid-cols-1 sm:col-span-2 md:col-span-2 lg:col-span-1 gap-2 justify-items-center  md:justify-items-start content-start">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="grid grid-cols-3 gap-2 items-start">
              <a href="#" className="hover:text-gray-300 transition">Twitter</a>
              <a href="#" className="hover:text-gray-300 transition">LinkedIn</a>
              <a href="#" className="hover:text-gray-300 transition">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Growify Digital. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
