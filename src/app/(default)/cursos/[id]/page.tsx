
import { Metadata } from 'next';
import dynamic from 'next/dynamic';



import { APIYouTube } from '@/shared/services/api-youtube';

import { CourseHeaderLoading } from '@/app/components/course-header/CourseHeaderLoading';
import { StartCourse } from '@/app/components/course-header/components/StartCourse';
import { CourseContent } from '@/app/components/course-content/CourseContent';

const CourseHeader = dynamic(
  () => import('@/app/components/course-header/CourseHeader').then(res => res.CourseHeader),
  { loading: CourseHeaderLoading },
);


interface Props {
    params: Promise<{ id: string }>; // Tipado como Promise
  }

  export async function generateStaticParams() {
    const courses = await APIYouTube.course.getAll();
    return courses.map(course => ({ id: course.id }));
  }

  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params; // Aguarda o ID
    const courseDetail = await APIYouTube.course.getById(id);

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

export default async function PageCourseDetail(props: Props) {
  const { id } = await props.params; // Aguarda o ID antes de usar
  const courseDetail = await APIYouTube.course.getById(id);

  const firstClass = courseDetail.classGroups.at(0)?.classes.at(0);

  return (
    <main className='mt-8 flex justify-center'>
      <div className='w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4 lg:px-0 md:flex-row-reverse'>

        {firstClass && (
          <div className='flex-1'>
            <StartCourse
              idClass={firstClass.id}
              title={firstClass.title}
              idCourse={courseDetail.id}
              imageUrl={courseDetail.image}
            />
          </div>
        )}

        <div className='flex-2 flex flex-col gap-12 pb-12'>
          <CourseHeader
            title={courseDetail.title}
            description={courseDetail.description}
            numberofclasses={courseDetail.numberOfClasses}
          />

          <CourseContent classGroups={courseDetail.classGroups} />
        </div>
      </div>
    </main>
  );
}