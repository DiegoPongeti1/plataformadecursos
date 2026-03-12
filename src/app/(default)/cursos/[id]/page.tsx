
import { Metadata } from "next"
import { StartCourse } from "../../../components/course-header/components/StartCourse";
import { CourseContent } from "../../../components/course-content/CourseContent";
import { APIYouTube } from "@//shared/services/api-youtube";
import dynamic from 'next/dynamic'

const CourseHeader = dynamic(
    import('../../../components/course-header/CourseHeader').then(res => res.CourseHeader)// erro

);

interface Props {
    params: Promise<{ id: string }>;

}
export async function generateStaticParams() {
    const courses = await APIYouTube.course.getAll();
    return courses.map(course => ({ id: course.id }));
}


export async function generateMetadata({ params }: Props): Promise<Metadata> { //função para gerar metadados dinamicamente
    const courseDetail = await APIYouTube.course.getById((await params).id);

    return {
        title: courseDetail.title,
        description: courseDetail.description,
        openGraph: {
            locale: 'pt_BR',
            type: 'video.other',
            title: courseDetail.title,
            images: courseDetail.image,
            description: courseDetail.description,
            videos: courseDetail.classGroups
                .reduce<string[]>((previous, current) => [
                    ...previous,
                    ...current.classes.map(classItem => `https://codarse.com/player/${current.courseId}/${classItem.id}`),
                ], []),
        }
    };
};

export default async function PageCourseDetail({ params }: Props) {


    const { id } = await params;
    const courseDetail = await APIYouTube.course.getById(id);

    // const courseDetail = await APIYouTube.course.getById(params.id);

    const firstClass = courseDetail.classGroups.at(0)?.classes.at(0)

    return (
        <main className="mt-8 flex justify-center ">
            <div className="w-full min-[880px]:max-w-[880px] px-2  flex flex-col gap-4 lg:px-0 md:flex-row-reverse">

                <div className="flex-1 ">

                    {firstClass && (
                        <div className="flex-1">
                            <StartCourse
                                title={firstClass.title}
                                idCourse={courseDetail.id}
                                imageUrl={courseDetail.image}
                                idClass={firstClass.id}
                            />
                        </div>
                    )}
                </div>

                <div className="flex-2 flex flex-col gap-12 pb-12">
                    <CourseHeader
                        title={courseDetail.title}
                        description={courseDetail.description}
                        numberofclasses={courseDetail.numberOfClasses}
                    />

                    <CourseContent classGroups={courseDetail.classGroups} />
                </div>
            </div>
        </main>
    )
}