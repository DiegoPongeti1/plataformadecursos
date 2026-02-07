'use client'

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

import { Class } from "./Class";

interface IClassGroupProps {
    title: string;
    courseId: string;
    classes: {
        id: string;
        title: string;

    }[];
}
export function ClassGroup({ title, courseId, classes }: IClassGroupProps) {
    const [open, setOpen] = useState(false);


    return (
        <>
            <button
                className="flex items-center gap-2 p-4 bg-paper"
                onClick={() => setOpen(!open)}
            >
                {open
                    ?
                    <MdKeyboardArrowUp size={24} />
                    :
                    <MdKeyboardArrowDown size={24} />
                }
                {title}
            </button>

            <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
                {classes.map(({ id, title }) => (
                    <li key={id}>
                        <Class
                            key={id}
                            title={title}
                            palyerUrl={`/player/${courseId}/${id}`}
                        />
                    </li>
                ))}
            </ol>
        </>
    )
}