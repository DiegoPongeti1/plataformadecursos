'use client'
import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from 'react-intersection-observer'


interface IStartCourseProps {
    idCourse: string;
    idClass: string;
    imageUrl: string;
    title: string;
}

export function StartCourse({ idCourse, idClass, imageUrl, title }: IStartCourseProps) {
    const [ref, inView] = useInView({ threshold: 0.2, initialInView: true });


    return (
        <>
            <div ref={ref} className="bg-paper rounded-md p-3 flex flex-col gap-4">
                <Link href={`/player/${idCourse}/${idClass}`}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded-md"
                >
                    <div className="w-full h-full flex items-center justify-center bg-background rounded opacity-0 hover:opacity-70 transition-opacity duration-400">
                        <MdPlayCircleOutline size={58} className="" />
                    </div>
                </Link>
                <Link href={`/player/${idCourse}/${idClass}`}
                    className="bg-primary p-2 px-3 rounded text-center"
                >
                    Iniciar o Curso
                </Link>
            </div>

            {!inView && (
                <div className="bg-paper p-3 px-2 flex flex-col gap-4 absolute left-0 right-0 top-14">
                    <h1 className="font-extrabold text-xl">
                        {title}
                    </h1>

                    <Link href={`/player/${idCourse}/${idClass}`}
                        className="bg-primary p-2 px-3 rounded text-center"
                    >
                        Iniciar o Curso
                    </Link>
                </div>
            )}
        </>

    )
}