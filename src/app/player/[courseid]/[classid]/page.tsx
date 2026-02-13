
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
        <>
            <PlayerHeader
                title="API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas"
                subtitle="Curso de API Rest, Node e TypeScript"
            />

            <PlayerClassGroup >
                <PlayerClass
                    done={false}
                    title="API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas"
                    playing
                    onCheck={() => console.log('check')}
                    onPlay={() => console.log('play')}
                />
            </PlayerClassGroup>
        </>

    )
}