
'use client'
import { PlayerClass } from "@//app/components/player/PlayerClass";
import { PlayerHeader } from "@//app/components/player/PlayerHeader";


interface Props {
    params: Promise<{
        courseid: string,
        classid: string,
    }>;
}

export default async function PagePlayer({ params }: Props) {
    const { courseid, classid } = await params;
    return (
        <>
            <PlayerHeader
                title="API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas"
                subtitle="Curso de API Rest, Node e TypeScript"
            />

            <PlayerClass
                done={false}
                title="API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas"
                playing
                onCheck={() => console.log('check')}
                onPlay={() => console.log('play')}
            />
        </>

    )
}