'use client'

import { useRouter } from "next/navigation"

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

            <div>
                Descrição da aula
            </div>
        </div>
    )
}