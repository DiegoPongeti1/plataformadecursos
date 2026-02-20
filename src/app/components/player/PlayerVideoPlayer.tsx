'use client'

import React from 'react';
import dynamic from 'next/dynamic'

interface PlayerProps {
    url: string;
}

// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }) as React.ComponentType<PlayerProps>


interface IPlayerVideoPlayerProps {
    videoId: string;
}

export const PlayerVideoPlayer = ({ videoId }: IPlayerVideoPlayerProps) => {

    return (
        <>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
            />
        </>
    )
}