import { Metadata } from "next"
import { CourseHeader } from "../../components/header/course-header/CourseHeader";
import { StartCourse } from "../../components/header/course-header/components/StartCourse";
import { Class } from "../../components/header/course-content/components/Class";
import { ClassGroup } from "../../components/header/course-content/components/ClassGoup";


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
            <div className="w-full min-[880px]:max-w-[880px] px-2  flex flex-col gap-4 lg:px-0 md:flex-row-reverse">

                <div className="flex-1 ">

                    <StartCourse
                        idCourse={id}
                        idClass="1"
                        title=" Curso de Figma para DEVs "
                        imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                    />
                </div>
                <div className="flex-2 flex flex-col gap-4">
                    <CourseHeader />
                    <ClassGroup
                        title='Introdução e Apresentação do Projeto'
                        courseId="123"
                        classes={[
                            { id: '1', title: 'NextJs, TailwindCss e TypeScript: #00 - Apresentação do Projeto' },
                            { id: '2', title: 'NextJs, TailwindCss e TypeScript: #01 - Instalação e Configuração do Ambiente' },
                        ]}
                    />
                </div>
            </div>
        </main>
    )
}