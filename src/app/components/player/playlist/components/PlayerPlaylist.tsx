'use client'
import { useRouter } from "next/navigation";
import { IPlayerClassGroupProps, PlayerClassGroup } from "./PlayerClassGroup";
import { useState } from "react";

interface IPlayerPlaylistProps {
    PlayingClassId: string;
    PlayingcourseId: string;
    classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[];

}

export function PlayerPlaylist({ classGroups, PlayingClassId, PlayingcourseId }: IPlayerPlaylistProps) {
    const [openedIndex, setOpenedIndex] = useState<number | undefined>(
        classGroups.findIndex((classGroup) =>
            classGroup.classes.some((classItem) => classItem.Classid === PlayingClassId)
        )
    )


    const router = useRouter()
    return (
        <div className="flex flex-col gap-2 h-full">
            <div className="flex flex-col p-4 bg-paper">

                <h2 className="text-lg font-bold">
                    Conteúdo do curso
                </h2>

            </div>

            <ol className="overflow-auto overflow-primary">
                {classGroups.map((classGroup, index) => (
                    <li key={classGroup.title}>

                        <PlayerClassGroup

                            {...classGroup}
                            onToggle={() => setOpenedIndex(openedIndex === index ? undefined : index)}
                            open={openedIndex === index}
                            position={index + 1}
                            PlayingClassId={PlayingClassId}
                            onCheck={(classId) => console.log('check', classId)}
                            onPlay={(classId) => router.push(`/player/${PlayingcourseId}/${classId}`)}
                        />
                    </li>
                ))}
            </ol>
        </div>
    )
}