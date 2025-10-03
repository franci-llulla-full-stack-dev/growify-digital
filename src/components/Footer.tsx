const Footer = () => {
  return (
    <footer className="bg-[var(--foreground)] text-white py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Left: About / Description */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Growify Digital</h2>
          <p className="text-sm md:text-base text-gray-300">
            We create premium websites, SaaS platforms, and marketing solutions
            that help your brand grow and stand out online.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="flex-1 flex flex-col md:flex-row md:justify-center gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Services</h3>
            <a href="#" className="text-gray-300 hover:text-white transition">Web Development</a>
            <a href="#" className="text-gray-300 hover:text-white transition">UI/UX Design</a>
            <a href="#" className="text-gray-300 hover:text-white transition">SEO & Marketing</a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Company</h3>
            <a href="#" className="text-gray-300 hover:text-white transition">About Us</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Portfolio</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="flex-1 flex flex-col gap-2 items-start md:items-end">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex gap-4 mt-1">
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
  );
};

export default Footer;
