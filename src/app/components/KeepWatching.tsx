import Link from "next/link"
import { MdPlayCircle } from "react-icons/md"



export function KeepWatching() {
    return (
        <Link
            href={`/player/{courseId}/{classid}`}
            className="p-4 mx-4 flex gap-2 bg-primary rounded-2xl hover:no-underline"
        >
            <div className="flex flex-col gap-2 flex-1">
                <h1 className="font-bold line-clamp-1 ">NextJS, TailwindCSS e Typescript</h1>
                <p className="line-clamp-2">Aula 01 - Começando com NextJS</p>
            </div>

            <div className="flex items-center justify-center gap-2">
                <span className="hidden md:block">Continuar Assistindo</span>
                <MdPlayCircle size={28} />
            </div>


        </Link>

    )
}