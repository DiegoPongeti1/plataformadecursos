
import { Metadata } from "next";
import { Section } from "../components/header/section/Section";

export const metadata: Metadata = {
    title: "Codarse - Todos os Cursos"
}


export default function PageCursos() {
    return (
        <main>
            <Section title="Todos os Cursos"
                variant="grid"
            />
        </main>
    );
}