import PortofolioItem from "./PortofolioItem";
import Button from "../Button";

const Portofolio = () => {
    return (
        <div className="grid grid-cols-1 px-5 lg:px-20 xl:px-30 pb-10 bg-[var(--background)]">
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
                    image="/portofolio-personal-branding.png"
                    title="Personal Branding"
                    description="A comprehensive branding package including logo design, brand guidelines, and marketing materials."
                />
                <PortofolioItem 
                    image="/portofolio-booking.png"
                    title="Booking System"
                    description="A custom booking system with real-time availability, user accounts, and automated notifications."
                />
            </div>
            <div className="justify-self-center pt-10">
                <Button link="" text="View more" />
            </div>
        </div>
    )
}

export default Portofolio;