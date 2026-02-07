import { Metadata } from "next"
import { CourseHeader } from "../../components/header/course-header/CourseHeader";
import { StartCourse } from "../../components/header/course-header/components/StartCourse";


interface Props {
    params: Promise<{ id: string }> // os params são uma promise
}

export async function generateMetadata({ params }: Props): Promise<Metadata> { //função para gerar metadados dinamicamente
    const { id } = await params; //espera a promise resolver para pegar o id

    return {
        title: id,
        description: `Curso de ${id}`,
    };
};

export default async function PageCourseDetail({ params }: Props) {
    const { id } = await params;

    return (
        <main className="mt-8 flex justify-center ">
            <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4">
                <StartCourse
                    idCourse={id}
                    idClass="1"
                    title=" Curso de Figma para DEVs "
                    imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                />

                <CourseHeader />
                <CourseHeader />
                <CourseHeader />
                <CourseHeader />
                <CourseHeader />
                <CourseHeader />
            </div>
        </main>
    )
}