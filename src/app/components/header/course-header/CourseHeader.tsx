

export const CourseHeader = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">
                Curso de Figma para DEVs
            </h1>

            <p>
                Aprenda a criar protótipos de alta qualidade para suas aplicações web e mobile.
            </p>

            <div className="flex gap-2 items-center">
                <button className="rounded-full gap-8 py-2 px-4 bg-paper">
                    Compartilhar
                </button>

                <span className="font-normal text-lg">
                    48 aulas
                </span>
            </div>

        </div>
    )
}