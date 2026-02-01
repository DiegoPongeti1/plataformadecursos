"use client";

import Link from "next/link";
import { MdMenu, MdOpenInNew } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export function Header() {

    const [title, setTitle] = useState('Codarse');
    const [drawer, setDrawer] = useState(false);

    const currentPath = usePathname();

    useEffect(() => {

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTitle(document.title);
        setDrawer(false);
    }, [currentPath]);

    return (
        <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6">

            <button onClick={() => setDrawer(true)} className="sm:hidden" >
                <MdMenu size={24} />
            </button>

            <ul className="flex gap-4 items-center " tabIndex={drawer ? -1 : undefined}>

                <li className="my-2 ">
                    <Link href="/" className="border-2 rounded-md py-2 px-1 font-bold ">CORDARSE</Link>
                </li>

                <li className="hidden sm:block">
                    <Link href="/" data-active={currentPath === "/"} className="data-[active=true]:underline">
                        Pagina Inicial</Link>
                </li>

                <li className="hidden sm:block">
                    <Link href="/cursos" data-active={currentPath === "/cursos"} className="data-[active=true]:underline">
                        Cursos</Link>
                </li>

                <li className="hidden sm:block">
                    <Link href="https://blog.codarse.com" target="_blank" className="flex items-center gap-1">
                        Blog
                        <MdOpenInNew />
                    </Link>
                </li>
            </ul>

            {/* Menu Lateral right-0 fixa a div nos cantos bg-gradient-to-r from-background faz o menu lateral fazer o tom de cor do background*/}
            <div data-open={drawer}
                tabIndex={drawer ? undefined : -1}
                className="bg-gradient-to-r from-background fixed top-0 left-0 bottom-0 right-0  transition-transform duration-50  data-[open=false]:-translate-x-full sm:hidden"
                onClick={() => setDrawer(false)}>


                <ul className="flex gap-4 flex-col p-4 w-60 h-full bg-background sm:hidden"
                    onClick={e => e.stopPropagation()}
                >

                    <li className=" onClick :border-b-0 border-white">
                        <Link href="/" data-active={currentPath === "/"} className="data-[active=true]:underline">
                            Pagina Inicial</Link>
                    </li>

                    <li className="">
                        <Link href="/cursos" data-active={currentPath === "/cursos"} className="data-[active=true]:underline">
                            Cursos</Link>
                    </li>

                    <li className="">
                        <Link href="https://blog.codarse.com" target="_blank" className="flex items-center gap-1">
                            Blog
                            <MdOpenInNew />
                        </Link>
                    </li>
                </ul>
            </div>


            <h1 className="sm:hidden">
                {title}
            </h1>
        </nav>
    );
}