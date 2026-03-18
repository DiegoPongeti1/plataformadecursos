import { PlayerClassDetails, PlayerHeader, PlayerPlaylist } from '@/app/components/player';
import { APIYouTube } from '@/shared/services/api-youtube';


interface Props {
  // Agora params é uma Promise que resolve para o objeto
  params: Promise<{
    classid: string;
    courseid: string;
  }>;
}

export default async function PagePlayer(props: Props) {
  // 1. Aguarda a resolução dos params primeiro
  const { classid: classId, courseid: courseId } = await props.params;

  // 2. Busca os dados da API (paralelamente para ganhar performance)
  const [courseDetails, classDetails] = await Promise.all([
    APIYouTube.course.getById(courseId),
    APIYouTube.class.getById(classId)
  ]);

  const classGroupsData = courseDetails.classGroups.map(classGroup => ({
    title: classGroup.title,
    classes: classGroup.classes.map(classItem => ({
      done: false,
      Classid: classItem.id,
      title: classItem.title,
    }))
  }));


  return (
    <main className='flex flex-col gap-2 h-screen'>
      <PlayerHeader
        title={classDetails.title}
        subtitle={courseDetails.title}
      />

      <div className='flex gap-2 h-[calc(100vh-72px)]'>
        <div className='max-w-96 hidden md:block'>
          <PlayerPlaylist
            PlayingClassId={classId}
            PlayingcourseId={courseId}
            classGroups={classGroupsData}
          />
        </div>

        <PlayerClassDetails
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          classItem={{ ...classDetails, Id: classId } as any}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          course={{ ...courseDetails, classGroups: classGroupsData } as any}
        />
      </div>
    </main>
  );
}