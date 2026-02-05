import { Metadata } from "next"


interface Props {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> { //função para gerar metadados dinamicamente


    return {
        title: params.id,
        description: `Curso de ${params.id}`,
    };
};

export default function PageCourseDetail({ params }: Props) {


    return (
        <main className="mt-8 flex justify-center">
            Detalhe do Curso {params.id}
        </main>
    )
}