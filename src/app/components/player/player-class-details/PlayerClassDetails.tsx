'use client'

import { useRouter } from "next/navigation"
import * as Tabs from "@radix-ui/react-tabs";
import dynamic from "next/dynamic";

import { IPlayerVideoPlayerRef, PlayerVideoPlayer } from "./components/PlayerVideoPlayer"
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup"
import { useEffect, useMemo, useRef, useState } from "react";

import { PlayerClassHeader } from "./components/PlayerClassHeader";
import { Comments } from "./components/comments/Comments";
import { PlayerPlaylist } from "../playlist/PlayerPlaylist";
import { MdComment, MdThumbUp, MdVisibility } from "react-icons/md";
import { CourseHeaderLoading } from "../../course-header/CourseHeaderLoading";


const CourseHeader = dynamic(
    import('../../course-header/CourseHeader').then(res => res.CourseHeader),
    { ssr: false, loading: CourseHeaderLoading },
);

interface IPlayerClassDetails {

    course: {
        title: string;
        description: string;
        numberOfClasses: number;
        Id: string;
        classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[];
    }

    classItem: {
        Id: string;
        videoId: string,
        viewsCount: number;
        likesCount: number;
        commentsCount: number;
        title: string;
        description: string;
    }

    
   
}


export const PlayerClassDetails = ({ course, classItem }: IPlayerClassDetails) => {

    const router = useRouter();

    const PlayerVideoPlayerRef = useRef<IPlayerVideoPlayerRef>(null);

    const [currentTab, setCurrentTab] = useState('class-details')
    // PlayerVideoPlayerRef.current?.setProgress


    useEffect(() => {
        const matchMedia = window.matchMedia("(min-width: 768px)")
        

        const handleMatchMedia = (e: MediaQueryListEvent) => {
            if (e.matches && currentTab === 'course-playlist') {
                setCurrentTab('class-details');

            }
        }
        matchMedia.addEventListener('change', handleMatchMedia);
       return () => matchMedia.removeEventListener('change', handleMatchMedia);
    }, [currentTab])

    const nextClassId = useMemo(() => {
        const classes = course.classGroups.flatMap(classGroup => classGroup.classes);

        const currentClassIndex = classes.findIndex(({Classid}) => Classid === classItem.Id);

        const nextClassIndex = currentClassIndex + 1;

        if (currentClassIndex === classes.length) {
            return undefined;
        }

        return classes[nextClassIndex].Classid;

    }, [course.classGroups, classItem.Id])



    return (

        <div className="flex-1 overflow-auto pb-10">

            <div className="aspect-video">
                <PlayerVideoPlayer
                    ref={PlayerVideoPlayerRef}
                    videoId={classItem.videoId}
                    onPlayNext={() => nextClassId ? router.push(`/player/${course.Id}/${nextClassId}`) : {}}
                />
            </div>

            <div className="flex gap-2 p-2 opacity-50">
                <div className="flex gap- items-center ">
                    <MdVisibility />
                    <span>{classItem.viewsCount}</span>
                    <span>Visualizações</span>
                </div>
                <a className="flex gap- items-center " target="_blank" href={`https://www.youtube.com/watch?v=${classItem.videoId}`}>
                    
                    <MdThumbUp />
                    <span>{classItem.likesCount}</span>
                    <span>Curtidas</span>
                
                </a>
                <div className="flex gap- items-center">
                    
                     <MdComment />
                     <span>{classItem.commentsCount}</span>
                    <span>Comentários</span>
                
                </div>
            </div>

            <Tabs.Root value={currentTab} onValueChange={value=> setCurrentTab(value)}>
                <Tabs.List className="flex gap-4">
                    <Tabs.Trigger
                        value="class-details"
                        className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary '
                    >
                        Visão geral
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value="course-playlist"
                        className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary md:hidden'
                    >
                        Conteúdo do Curso
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

                <Tabs.Content value="course-playlist" className="px-2">
                    <PlayerPlaylist
                        PlayingClassId={classItem.Id}
                        PlayingcourseId={course.Id}
                        classGroups={course.classGroups}
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
