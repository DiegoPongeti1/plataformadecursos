import { ClassGroup, IClassGroupProps } from "./components/ClassGoup";

interface IContentCourseProps {
    classGroups: IClassGroupProps[];
}

export function CourseContent({ classGroups }: IContentCourseProps) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-extrabold">
                Conteúdo do Curso
            </h2>
            <ol className="flex flex-col rounded-lg overflow-clip">
                {classGroups.map((classGroup, index) => (
                    <li key={`${classGroup.courseId}-${classGroup.title}-${index}`} className="flex flex-col">
                        <ClassGroup {...classGroup} />
                    </li>
                ))}
            </ol>
        </div>
    )
}