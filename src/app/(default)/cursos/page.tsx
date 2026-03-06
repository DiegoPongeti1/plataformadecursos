
import { Metadata } from "next";
import { Section } from "../../components/section/Section";

import { APIYouTube } from "@//shared/services/api-youtube";

export const metadata: Metadata = {
    title: "Codarse - Todos os Cursos"
}


export default async function PageCursos() {
    const courses = await APIYouTube.course.getAll();
    return (
        <main className="mt-8 flex justify-center ">
            <div className="w-full min-[880px]:max-w-[880px]">

                <Section
                    title="Todos os Cursos"
                    variant="grid"
                    items={
                        courses.map(course => ({
                            title: course.title,
                            image: course.image,
                            href: `/cursos/${course.id}`,
                            description: course.description
                        }))
                    }
                />
            </div>
        </main>


    );
}