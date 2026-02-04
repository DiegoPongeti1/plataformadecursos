"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Card, ICardProps } from "../card/Card";
import { useRef } from "react";


interface ISectionProps { // Define as propriedades que a Section receberá
    title: string; // Título da seção
    variant: 'grid' | 'h-list';
    items: ICardProps[]; // Array de cards que serão renderizados
}

export function Section({ title, variant, items }: ISectionProps) { // Recebe as propriedades e as desestrutura

    const scroollRef = useRef<HTMLUListElement>(null) //cria uma referência para o elemento ul

    const handleScroll = (scroll: number) => { // Função para rolar a lista
        const currentScrollLeft = scroollRef.current?.scrollLeft || 0; // Pega a posição atual da lista
        scroollRef.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll }); // Rola a lista
    }


    return (
        <section className="flex flex-col gap-4 px-4 "> {/*px aplica o padding no left e no right*/}
            <h2 className="font-bold text-xl">
                {title} {/* Exibe o título da seção*/}
            </h2>

            <ul
                ref={scroollRef}
                data-variant={variant}
                className=" grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto  "
            > {/*grid-cols-1 aplica o grid no left e no right*/}

                <button className=" h-[56px] w-[56px] rounded-full bg-primary flex items-center justify-center sticky my-auto left-0 -ml-14 "
                    onClick={() => handleScroll(-300)} // Rola a lista para a esquerda
                >
                    <MdKeyboardArrowLeft size={32} />
                </button>


                {items.map(item => (
                    <li key={item.title} data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72 ">
                        <Card

                            image={item.image}
                            title={item.title}
                            href={item.href}
                            description={item.description}
                        />
                    </li>
                ))}

                <button className=" h-[56px] w-[56px] rounded-full bg-primary flex items-center justify-center sticky my-auto right-0 -mr-14"
                    onClick={() => handleScroll(300)} // Rola a lista para a direita
                >
                    <MdKeyboardArrowRight size={32} />
                </button>
            </ul>
        </section >
    );
}