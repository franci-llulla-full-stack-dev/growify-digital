import Image from "next/image";

const About = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <section className="flex flex-col px-10 py-16 bg-[var(--background)]">
                <h1 className="font-extrabold text-2xl md:text-3xl pb-5">
                    What We Do
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                    At <span className="font-semibold">Growify Digital</span>, we don’t just build websites, we craft 
                    digital experiences that help ambitious brands stand out and scale fast.  
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-4">
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
            <div className="hidden md:flex">
                <div className="flex-1 flex items-end justify-end p-5">
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
