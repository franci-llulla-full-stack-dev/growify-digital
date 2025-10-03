type ButtonProps = {
    link: string;
    text: string;
}

const Button = ({ link, text }: ButtonProps) => {
    return (
        <a href={link} 
            className="text-[20px] text-[var(--background)] border-2 border-[var(--primaryBlue)] bg-[var(--foreground)] py-2 px-10 text-center"
        >
            {text}
        </a>
    )
}

export default Button;