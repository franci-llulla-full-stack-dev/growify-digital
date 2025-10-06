import Image from "next/image";

type PortofolioItemProps = {
    image: string;
    title: string;
    description: string;
}

const PortofolioItem = ({ image, title, description}: PortofolioItemProps) => {
    return (
       <div className="border border-[var(--primaryBlue)] grid grid-rows-[auto,1fr]">
            {/* Top section with image */}
            <div className="border-b border-[var(--primaryBlue)] bg-[var(--primaryBlue)] grid place-items-center p-5">
                <div className="w-full relative h-40 grid-rows-1 items-center justify-center overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="30vw"
                    className="object-cover"
                />
                </div>
            </div>

            {/* Bottom section with text */}
            <div className="text-center text-[var(--primaryBlue)] bg-[var(--foreground)] font-bold p-5 grid grid-rows-[auto,1fr] items-start">
                <h2 className="text-[24px] pb-1">{title}</h2>
                <p className="text-[14px] card-text">{description}</p>
            </div>
        </div>
    )
}

export default PortofolioItem;