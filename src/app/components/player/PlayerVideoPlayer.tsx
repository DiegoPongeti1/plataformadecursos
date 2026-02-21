'use client'

import dynamic from "next/dynamic"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

interface IPlayerVideoPlayerProps {
    videoId: string;
}

export const PlayerVideoPlayer = ({ videoId }: IPlayerVideoPlayerProps) => {
    return (
        <>
            <ReactPlayer
                width="100%"
                height="100%"
                src={`https://www.youtube.com/watch?v=${videoId}`}
                controls
                playing={false}
            />
        </>
    )
}


// 'use client'

// interface IPlayerVideoPlayerProps {
//     videoId: string;
// }

// export const PlayerVideoPlayer = ({ videoId }: IPlayerVideoPlayerProps) => {
//     return (
//         <>
//             <iframe
//                 width="100%"
//                 height="100%"
//                 src={`https://www.youtube.com/embed/${videoId}`}
//                 title="YouTube video player"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//             />
//         </>
//     )
// }