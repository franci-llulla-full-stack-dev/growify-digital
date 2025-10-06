import Testimonial from "./Testimonial";

const Testimonials = () => {
    return (
        <div className="grid grid-cols-1 px-5 bg-[var(--background)]">
             <h1 className="font-bold text-[24px]">
                Testimonials
            </h1>
            <div >
                <Testimonial
                    clientName="John Doe"
                    feedback="Great service!"
                    clientImage="/path/to/image.jpg"
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Testimonials;