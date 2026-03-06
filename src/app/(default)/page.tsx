import { Metadata } from "next";
import { Section } from "../components/section/Section";
import { KeepWatching } from "../components/KeepWatching";
import { APIYouTube } from "@//shared/services/api-youtube";

export const metadata: Metadata = {
  title: "Pagina Inicial"
}

export default async function PageHome() {
  const courses = await APIYouTube.course.getAll();
  return (
    <div className="mt-8 flex justify-center">
      <main className="w-full mt-8 min-[880px]:max-w-[880px] flex flex-col gap-4">

        <KeepWatching />
        <Section
          variant="h-list"
          title="Cursos"
          items={
            courses.map(course => ({
              title: course.title,
              image: course.image,
              href: `/cursos/${course.id}`,
              description: course.description
            }))
          }
        />
      </main>
    </div>
  );
}
