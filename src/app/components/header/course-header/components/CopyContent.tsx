"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { MdCheck, MdContentCopy } from "react-icons/md";

interface IContentCopyProps {
    title: string,
    content: string,
    children: React.ReactNode
}

export function ContentCopy({ title, content, children }: IContentCopyProps) {

    const [copied, setCopied] = useState(false); // estado inicial do componente

    useEffect(() => {
        setTimeout(() => setCopied(false), 1000); // executa quando o componente for montado
    }, [copied])

    const handleCopy = () => {
        window.navigator.clipboard.writeText(content) // copia o conteúdo
        setCopied(true); // define o estado como true
    }
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                {children}
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className=" p-2 bg-paper border border-primary rounded-lg flex flex-col gap-2 max-w-sm min-w-72">
                    <span>{title}</span>

                    <div className="flex items-center gap-1">
                        <input
                            type="text"
                            value={content}
                            autoFocus
                            onFocus={(e) => e.target.select()}
                            readOnly
                            className="bg-background p-1 px-2 rounded-md w-full" />


                        <button className=" p-2" onClick={handleCopy}>
                            {copied ? <MdCheck className="text-primary" /> : <MdContentCopy />} {/* se o estado for true, o botão será um check, senão, será um ícone de copiar*/}
                        </button>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}