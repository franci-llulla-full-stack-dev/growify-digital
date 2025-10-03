import Image from "next/image";

type PortofolioItemProps = {
    image: string;
    title: string;
    description: string;
}

const PortofolioItem = ({ image, title, description}: PortofolioItemProps) => {
    return (
        <div className="border border-[var(--primaryBlue)] ">
            <div className="border-b border-[var(--primaryBlue)] bg-[var(--primaryBlue)] flex flex-col items-center justify-center p-5">
                <div className="w-full h-40 flex items-center justify-center">
                    <Image src={image} alt={title} width={800} height={160} className="w-full h-full object-cover"  />
                </div>
            </div>
            
            <div className="text-center text-[var(--primaryBlue)] bg-[var(--foreground)] font-bold p-5">
                <h2 className=" text-[24px] pb-1">{title}</h2>
                <p className="text-[14px] card-text">{description}</p>
            </div>   
        </div>
    )
}

export default PortofolioItem;