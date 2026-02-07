'use client'

import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";


interface IClassProps {
    title: string;
    palyerUrl: string;
}
export function Class({ title, palyerUrl }: IClassProps) {
    return (
        <Link href={palyerUrl} className="flex items-center gap-6 p-4 hover:no-underline">
            <MdPlayCircleOutline size={24} />
            {title}
        </Link>
    )
}