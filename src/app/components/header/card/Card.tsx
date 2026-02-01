
import Image from "next/image";
import Link from "next/link";

interface ICardProps {
    image: string;
    title: string;
    description: string;
    href: string;
}
export function Card({ image, title, description, href }: ICardProps) {
    return (
        <Link href={href} className="hover:no-underline ">

            <article className="flex gap-4 flex-col p-2 rounded sm:hover:bg-primary">
                <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={0}
                    className="aspect-video object-cover rounded-2xl" // Mantem a proporção da imagem
                    draggable={false} // Impede que a imagem seja arrastada
                />
                <h4 className="font-extrabold text-lg">
                    {title}
                </h4>

                <p className="line-clamp-3">
                    {description}</p>
            </article>
        </Link>
    );
}