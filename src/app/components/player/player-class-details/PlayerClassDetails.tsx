'use client'

import { useRouter } from "next/navigation"
import * as Tabs from "@radix-ui/react-tabs";
import dynamic from "next/dynamic";

import { IPlayerVideoPlayerRef, PlayerVideoPlayer } from "./components/PlayerVideoPlayer"
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup"
import { useMemo, useRef } from "react";

import { PlayerClassHeader } from "./components/PlayerClassHeader";
import { Comments } from "./components/comments/Comments";


const CourseHeader = dynamic(
    import('../../course-header/CourseHeader').then(res => res.CourseHeader),
    { ssr: false },
);

interface IPlayerClassDetails {

    course: {
        title: string;
        description: string;
        numberOfClasses: number;
    }

    classItem: {
        title: string;
        description: string;
    }

    playingclassId: string;
    playingcourseId: string;
    classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[];
}


export const PlayerClassDetails = ({ course, playingcourseId, classGroups, playingclassId, classItem }: IPlayerClassDetails) => {

    const router = useRouter();

    const PlayerVideoPlayerRef = useRef<IPlayerVideoPlayerRef>(null);

    // PlayerVideoPlayerRef.current?.setProgress


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

        <div className="flex-1 overflow-auto pb-10">

            <div className="aspect-video">
                <PlayerVideoPlayer
                    ref={PlayerVideoPlayerRef}
                    videoId="bP47qRVRqQs"
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

                <hr className="border-paper mb-2" />

                <Tabs.Content value="class-details" className="px-2">
                    <PlayerClassHeader
                        title={classItem.title}
                        description={classItem.description}
                        onTimeClick={seconds => PlayerVideoPlayerRef.current?.setProgress(seconds)}
                    />
                </Tabs.Content>

                <Tabs.Content value="class-comments" className="px-2">
                    <Comments
                        comments={[                   
                                {
                                    content: 'My comment',
                                    likesCount: 999,
                                    publishDate: '2025-06-10T02:21:46Z',
                                    replies: undefined,
                                    author: {
                                        image: 'https://yt3.ggpht.com/ytc/AIdro_meYPWF3Z81dj754MMCwRNB5qa5X0rnAVUlmwP7B-cxg3Ij=s600-c-k-c0x00ffffff-no-rj-rp-mo',
                                        userName: '@DiegoPongeti'
                                    }
                                },

                                {
                                        content: 'My comment',
                                        likesCount: 999,
                                        publishDate: '2025-06-10T02:21:46Z',
                                        author: {
                                            image: 'https://yt3.ggpht.com/ytc/AIdro_meYPWF3Z81dj754MMCwRNB5qa5X0rnAVUlmwP7B-cxg3Ij=s600-c-k-c0x00ffffff-no-rj-rp-mo',
                                            userName: '@DiegoPongeti'
                                        },
                                        replies: [
                                            {
                                                content: 'My Reply',
                                                likesCount: 999,
                                                publishDate: '2025-06-10T02:21:46Z',
                                                author: {
                                                image: 'https://yt3.ggpht.com/ytc/AIdro_meYPWF3Z81dj754MMCwRNB5qa5X0rnAVUlmwP7B-cxg3Ij=s600-c-k-c0x00ffffff-no-rj-rp-mo',
                                                userName: '@DiegoPongeti'
                                                }
                                            }
                                        ]
                                    
                                }
                            
                        ]}
                    />
                </Tabs.Content>

                <Tabs.Content value="course-details" className="px-2">
                    <CourseHeader
                        title={course.title}
                        description={course.description}
                        numberofclasses={course.numberOfClasses}
                    />
                </Tabs.Content>

            </Tabs.Root>
        </div>
    )
}
