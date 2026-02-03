import { Card, ICardProps } from "../card/Card";


interface ISectionProps { // Define as propriedades que a Section receberá
    title: string; // Título da seção
    variant: 'grid' | 'h-list';
    items: ICardProps[]; // Array de cards que serão renderizados
}

export function Section({ title, variant, items }: ISectionProps) { // Recebe as propriedades e as desestrutura
    return (
        <section className="flex flex-col gap-4 px-4 "> {/*px aplica o padding no left e no right*/}
            <h2 className="font-bold text-xl">
                {title} {/* Exibe o título da seção*/}
            </h2>

            <ul
                data-variant={variant}
                className=" grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto "
            > {/*grid-cols-1 aplica o grid no left e no right*/}
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
            </ul>
        </section>
    );
}