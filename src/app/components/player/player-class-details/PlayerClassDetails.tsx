'use client'

import { useRouter } from "next/navigation"
import * as Tabs from "@radix-ui/react-tabs";

import { PlayerVideoPlayer } from "./components/PlayerVideoPlayer"
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup"
import { useMemo } from "react";

interface IPlayerClassDetails {
    playingclassId: string;
    playingcourseId: string;
    classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[];
}


export const PlayerClassDetails = ({ playingcourseId, classGroups, playingclassId }: IPlayerClassDetails) => {

    const router = useRouter();


    const nextClassId = useMemo(() => {
        const classes = classGroups.flatMap(classGroup => classGroup.classes);

        const currentClassIndex = classes.findIndex(classItem => classItem.Classid === playingclassId);

        const nextClassIndex = currentClassIndex + 1;

        if (currentClassIndex === classes.length) {
            return undefined;
        }

        return classes[nextClassIndex].Classid;

    }, [classGroups, playingclassId])

    return (

        <div className="flex-1">
            <div className="aspect-video">
                <PlayerVideoPlayer
                    videoId="Bj1OKr_UKxM"
                    onPlayNext={() => nextClassId ? router.push(`/player/${playingcourseId}/${nextClassId}`) : {}}
                />
            </div>

            <Tabs.Root defaultValue='class-details'>
                <Tabs.List className="flex gap-4">
                    <Tabs.Trigger
                        value="class-details"
                        className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary '
                    >
                        Visão geral
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value="class-comments"
                        className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary '
                    >
                        Comentarios
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value="course-details"
                        className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary '
                    >
                        Visão geral do Curso
                    </Tabs.Trigger>
                </Tabs.List>

                <hr className="border-paper" />

                <Tabs.Content value="class-details">
                    Detalhes da Aula
                </Tabs.Content>

                <Tabs.Content value="class-comments">
                    Comentarios da Aula
                </Tabs.Content>

                <Tabs.Content value="course-details">
                    Visão geral do Curso
                </Tabs.Content>

            </Tabs.Root>
        </div>
    )
}