import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";


interface IStartCourseProps {
    idCourse: string;
    idClass: string;
    imageUrl: string;
}

export function StartCourse({ idCourse, idClass, imageUrl }: IStartCourseProps) {
    return (
        <div className="bg-paper rounded-md p-3 flex flex-col gap-4">
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
                Começar o Curso
            </Link>
        </div>
    )
}