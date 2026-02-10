

interface Props {
    params: Promise<{
        courseid: string,
        classid: string,
    }>;
}

export default async function PagePlayer({ params }: Props) {
    const { courseid, classid } = await params;
    return (
        <>
            player {courseid} {classid}
        </>

    )
}