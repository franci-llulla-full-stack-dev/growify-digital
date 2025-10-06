import Image from "next/image";

const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 xl:px-30">
            <section className="grid grid-cols-1 gap-5 lg:gap-10 xl:gap-0 px-10 py-16 xl:py-20 bg-[var(--background)]">
                <h1 className="font-extrabold text-2xl md:text-3xl">
                    What We Do
                </h1>
                <p className="text-base md:text-lg leading-relaxed">
                    At <span className="font-semibold">Growify Digital</span>, we don’t just build websites, we craft 
                    digital experiences that help ambitious brands stand out and scale fast.  
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                    From <span className="font-semibold">custom websites</span> and <span className="font-semibold">SaaS platforms </span> 
                    to <span className="font-semibold">UI/UX design</span>, SEO, and brand identity, our solutions are 
                    designed to drive performance and growth. We blend creativity with technology to deliver 
                    results that make a real impact.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                    Whether you’re a startup with a bold idea or an established business ready to elevate your 
                    digital presence, we become your partner in transformation. Together, we’ll create something 
                    powerful that inspires your customers and sets you apart online.
                </p>
            </section>
            <div className="hidden lg:grid justify-items-start xl:justify-items-center py-16">
                <div className="p-5">
                    <Image 
                        src="/logo.png" 
                        alt="About Growify Digital" 
                        width={500}
                        height={200}
                        className=""
                    />
                </div>
                
            </div>
        </div>

    )
}

export default About;
