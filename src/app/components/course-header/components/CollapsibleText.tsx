
"use client";

import { useState } from "react";

interface ICollapsibleTextProps { // define as propriedades do componente
    numberOfLinesWhenClosed: number;
    children: React.ReactNode;
}

export function CollapsibleText({ numberOfLinesWhenClosed, children }: ICollapsibleTextProps) {

    const [open, setOpen] = useState(false) // estado inicial do componente

    return (
        <div className="flex flex-col items-end">
            <p
                data-open={open}
                style={{ "--number-of-lines-when-closed": numberOfLinesWhenClosed } as React.CSSProperties}
                className="data-[open=false]:line-clamp-[var(--number-of-lines-when-closed)]" // se o estado for false, o texto será limitado em X linhas, senão, será ilimitado
            >
                {children}
            </p>
            <button
                data-open={open}
                className="px-1 bg-paper rounded border border-primary data-[open=false]:-mt-7" // -mt-7 faz com que o botão suba 7 linhas quando o texto estiver fechado
                onClick={() => setOpen(!open)} // inverte o estado do componente
            >
                {open ? "Ver Menos" : "Ver Mais"}
            </button>
        </div>
    )
}