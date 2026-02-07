
import { MdShare } from "react-icons/md"
import { CollapsibleText } from "./components/CollapsibleText"
import { ContentCopy } from "./components/CopyContent"


const verMais = () => {

}

export const CourseHeader = () => {
    return (
        <div className="flex flex-col gap-2 ">
            <h1 className="font-extrabold text-xl">
                Curso de Figma para DEVs
            </h1>

            <CollapsibleText numberOfLinesWhenClosed={3}>
                Aprenda a criar protótipos de alta qualidade para suas aplicações web e mobile Aprenda a criar protótipos de alta qualidade para suas aplicações web e mobile Aprenda a criar protótipos de alta qualidade para suas aplicações web e mobile.
                Aprenda a criar protótipos de alta qualidade para suas aplicações web e mobile Aprenda a criar protótipos de alta qualidade para suas aplicações web e mobile.
            </CollapsibleText>

            <div className="flex gap-2 items-center">
                <ContentCopy title="Copie o Link abaixo" content="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <button className="rounded-full gap-2 py-2 px-4 bg-paper flex items-center">
                        <MdShare />
                        Compartilhar
                    </button>
                </ContentCopy>

                <span className="font-normal text-lg">
                    48 aulas
                </span>
            </div>

        </div>
    )
}