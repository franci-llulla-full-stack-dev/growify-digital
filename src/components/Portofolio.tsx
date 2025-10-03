import PortofolioItem from "./PortofolioItem";
import Button from "./Button";

const Portofolio = () => {
    return (
        <div className="flex flex-col px-5 bg-[var(--background)]">
            <h1 className="font-bold text-[24px]">
                Our Work
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
                <PortofolioItem 
                    image="/tennis-app-portofolio.png"
                    title="Tennis App"
                    description="A scalable e-commerce platform with integrated payment solutions and user-friendly design."
                />
                <PortofolioItem 
                    image="/project2.png"
                    title="Brand Identity"
                    description="Comprehensive branding package including logo design, color schemes, and brand guidelines."
                />
                <PortofolioItem 
                    image="/project3.png"
                    title="Web Application"
                    description="A responsive web application built with modern frameworks and best practices."
                />
            </div>
            <div className="flex justify-center pt-10">
                <Button link="" text="View more" />
            </div>
        </div>
    )
}

export default Portofolio;