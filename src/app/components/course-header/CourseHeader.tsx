'use client'
import { MdShare } from "react-icons/md"
import { CollapsibleText } from "./components/CollapsibleText"
import { ContentCopy } from "./components/CopyContent"


interface ICourseHeaderProps {
    title: string;
    description: string;
    numberofclasses: number;
}

export const CourseHeader = ({ title, description, numberofclasses }: ICourseHeaderProps) => {
    return (
        <div className="flex flex-col gap-2 ">
            <h1 className="font-extrabold text-xl">
                {title}
            </h1>

            <CollapsibleText numberOfLinesWhenClosed={3}>
                {description}
            </CollapsibleText>

            <div className="flex gap-2 items-center">
                <ContentCopy title="Copie o Link abaixo" content={typeof window !== 'undefined' ? window.location.href : ''}>
                    <button className="rounded-full gap-2 py-2 px-4 bg-paper flex items-center">
                        <MdShare />
                        Compartilhar
                    </button>
                </ContentCopy>

                <span className="font-normal text-lg">
                    {numberofclasses}
                </span>
            </div>

        </div>
    )
}