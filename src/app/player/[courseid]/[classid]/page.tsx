
'use client'
import { PlayerClass, PlayerClassGroup, PlayerHeader } from "@//app/components/player";


interface Props {
    params: {
        courseid: string,
        classid: string,
    };
}

export default function PagePlayer({ params: { courseid, classid } }: Props) {

    return (
        <main className="flex flex-col gap-4">
            <PlayerHeader
                title="API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas"
                subtitle="Curso de API Rest, Node e TypeScript"
            />

            <PlayerClassGroup
                onToggle={() => console.log('toggle')}
                open={true}
                position={1}
                title="Módulo 1 - Fundamentos"
                classes={[
                    {
                        title: "API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas",
                        playing: true,
                        done: false,
                    },
                    {
                        title: "API Rest, Node e TypeScript: #01 - Apresentação do Curso, tecnologias e ferramentas",
                        playing: true,
                        done: false,
                    },
                    {
                        title: "API Rest, Node e TypeScript: #02 - Apresentação do Curso, tecnologias e ferramentas",
                        playing: false,
                        done: true,
                    }
                ]} />

        </main>

    )
}