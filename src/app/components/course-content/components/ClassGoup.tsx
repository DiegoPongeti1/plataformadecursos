'use client'

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

import { Class } from "./Class";
// interface para tipar as props, mas não é obrigatório usar, é só uma boa prática
export interface IClassGroupProps {
    title: string;
    courseId: string;
    classes: {
        id: string;
        title: string;

    }[];
}

export function ClassGroup({ title, courseId, classes }: IClassGroupProps) {
    // hook para controlar o estado de aberto ou fechado
    const [open, setOpen] = useState(false);


    return (
        <>
            <button
                className="flex items-center gap-2 p-4 bg-paper"
                onClick={() => setOpen(!open)}
            >
                {open
                    ?
                    <MdKeyboardArrowRight size={24} />
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