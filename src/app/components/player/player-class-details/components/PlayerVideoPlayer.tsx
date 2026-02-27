'use client'

import dynamic from "next/dynamic"
import type TReactPlayer from "react-player"
import { useMemo, useRef, useState } from "react";
import { MdPlayCircle } from "react-icons/md";



const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })


interface IPlayerVideoPlayerProps {
    videoId: string;

    onPlayNext: () => void;
}

export const PlayerVideoPlayer = ({ videoId, onPlayNext }: IPlayerVideoPlayerProps) => {
    const playerRef = useRef<TReactPlayer>();

    const [progress, setProgress] = useState<number | undefined>(undefined)
    const [totalDuration, setTotalDuration] = useState<number | undefined>(undefined)


    const secondsUntilEnd = useMemo(() => {
        if (!totalDuration) return undefined;
        if (!progress) return undefined;

        return Number(totalDuration - progress).toFixed(0);
    }, [progress, totalDuration]);

    const showNextButton = useMemo(() => {

        return !!secondsUntilEnd && Number(secondsUntilEnd) <= 30;
    }, [secondsUntilEnd]);
    return (
        <>
            {showNextButton && (
                <button
                    onClick={onPlayNext}
                    className="bg-primary p-3 px-4 rounded-lg font-bold flex items-center gap-2 absolute top-36 right-4"
                >
                    Próxima Aula em {secondsUntilEnd} segundos
                    <MdPlayCircle size={24} />
                </button>
            )}

            <button onClick={() => playerRef.current.seekTo(120, 'seconds')}>
                avançar
            </button>
            <ReactPlayer
                onReady={ref => playerRef.current = ref}
                width="100%"
                height="100%"

                src={`https://www.youtube.com/watch?v=${videoId}`} // tive que usar o src para pegar a url da aula, usando 'url' não funcionou

                controls={true}
                playing={false}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onProgress={({ playedSeconds }: any) => setProgress(playedSeconds)}
                onDuration={(duration: number) => setTotalDuration(duration)}
                onEnded={() => onPlayNext()}
            />
        </>
    )
}
