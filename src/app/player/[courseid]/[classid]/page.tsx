'use client'

import { PlayerClassDetails, PlayerHeader, PlayerPlaylist } from "@//app/components/player";

interface Props {
    params: {
        courseid: string,
        classid: string,
    };
}

export default function PagePlayer({ params }: Props) {

    const classGroupsData = [
        {

            title: " 1 - Módulo 1 - Fundamentos",
            classes: [
                {
                    title: "API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas",
                    Classid: "aula-00",
                    done: false,
                },
                {
                    title: "API Rest, Node e TypeScript: #01 - Apresentação do Curso, tecnologias e ferramentas",
                    Classid: "aula-01",
                    done: false,
                },
                {
                    title: "API Rest, Node e TypeScript: #02 - Apresentação do Curso, tecnologias e ferramentas",
                    Classid: "aula-02",
                    done: true,
                },

            ]
        },

        {

            title: " 2 - Módulo 1 - Fundamentos",
            classes: [
                {
                    title: "API Rest, Node e TypeScript: #03 - Apresentação do Curso, tecnologias e ferramentas",
                    Classid: "aula-03",
                    done: false,
                },
                {
                    title: "API Rest, Node e TypeScript: #04 - Apresentação do Curso, tecnologias e ferramentas",
                    Classid: "aula-4",
                    done: false,
                },
                {
                    title: "API Rest, Node e TypeScript: #05 - Apresentação do Curso, tecnologias e ferramentas",
                    Classid: "aula-5",
                    done: true,
                },

            ]
        },

        {

            title: " 3 - Módulo 1 - Teste",
            classes: [
                {
                    title: "API Rest, Node e TypeScript: #06 - Apresentação do Curso, tecnologias e ferramentas",
                    Classid: "aula-6",
                    done: false,
                },
                {
                    title: "API Rest, Node e TypeScript: #07 - Apresentação do Curso, tecnologias e ferramentas",
                    Classid: "aula-7",
                    done: false,
                },
                {
                    title: "API Rest, Node e TypeScript: #08 - Apresentação do Curso, tecnologias e ferramentas",
                    Classid: "aula-8",
                    done: true,
                },

            ]
        },


    ]

    const { classid, courseid } = params;

    return (
        <main className="flex flex-col gap-2 h-screen">
            <PlayerHeader
                title="API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas"
                subtitle="Curso de API Rest, Node e TypeScript"
            />

            <div className="flex gap-2 h-[calc(100vh-72px)]">

                <div className="max-w-96 ">
                    <PlayerPlaylist
                        PlayingClassId={classid}
                        PlayingcourseId={courseid}
                        classGroups={classGroupsData}
                    />
                </div>

                <PlayerClassDetails
                    playingclassId={classid}
                    playingcourseId={courseid}
                    classGroups={classGroupsData}
                />

            </div>

        </main>

    )
}