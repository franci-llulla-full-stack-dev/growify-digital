import Image from "next/image";
import Link from "next/link";

type ServiceProps = {
    id: string;
    image: string;
    title: string;
    description: string;
};

const Service = ({id, image, title, description}: ServiceProps) => {
    return (
        <>
            <Link href={`/services/${id}`} key={id} className="no-underline">
                <div className="border border-[var(--primaryBlue)] grid grid-cols-1">
                    <div className="border-b border-[var(--primaryBlue)] bg-[var(--primaryBlue)] grid grid-cols-1 p-5">
                        <div className="w-full relative h-40 grid-rows-1 items-center justify-center overflow-hidden">
                            <Image src={image} alt={title} fill sizes="30vw" className="object-cover object-top"  />
                        </div>
                    </div>
                    
                    <div className="text-center text-[var(--primaryBlue)] bg-[var(--foreground)] font-bold p-5 grid grid-cols-1 justify-center">
                        <h2 className=" text-[24px] pb-1">{title}</h2>
                        <p className="text-[14px] card-text">{description}</p>
                    </div>   
                </div>
            </Link>
        </>
    )
}

export default Service;