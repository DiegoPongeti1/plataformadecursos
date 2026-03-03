
import dynamic from 'next/dynamic';
import { UrlMatcher } from 'interweave-autolink'
import { useMemo } from 'react';
import { Matcher, MatcherInterface } from 'interweave';

const Interweave = dynamic(() => import('interweave').then(result => result.Interweave), { ssr: false });

interface IPlayerClassHeaderProps {
    title: string;
    description: string;
}


export const PlayerClassHeader = ({ title, description }: IPlayerClassHeaderProps) => {

    const urlMatcher = useMemo(() => {
        return new UrlMatcher(
            'UrlMatcher',
            { validateTLD: false },
            ({ url }) => (
                <a href={url} target="_blank" className="text-primary" rel="noopener noreferrer">
                    {url}
                </a>
            )
        )
    }, [])

    const timeMatcher = useMemo(() => {
        return {
            asTag: () => 'button',
            propName: 'TimeMatcher',
            inverseName: 'noTimeMatcher',
            createElement: (children, props) => (
                <button key={props.key} className='text-primary hover:underline'>
                    children
                </button>
            ),
            match: (content) => {

                const result = content.match(/\b(\d{1,2}):(\d{1,2}):(\d{1,2})\b|\b(\d{1,2}):(\d{1,2})\b/);
                if (!result) return null;
                if (!result.index && result.index !== 0) return null;

                const first = result.at(0)
                if (!first) return null;



                return {
                    index: result.index,
                    length: result.length,
                    match: first,
                    valid: true,
                }
            }

        } satisfies MatcherInterface
    }, [])

    return (
        <div className=" flex gap-2 flex-col">
            <h3 className="font-extrabold text-xl">
                {title}
            </h3>

            <Interweave
                content={description}
                matchers={[urlMatcher, timeMatcher]} />

        </div>
    );
};