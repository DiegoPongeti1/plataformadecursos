import { format, parseISO } from 'date-fns';
import Image from 'next/image'
import { useMemo, useState } from 'react'

import { MdArrowDropDown, MdArrowDropUp, MdThumbUp } from "react-icons/md"

export interface ICommentProps {
    content: string;
    likesCount: number;
    publishDate: string;
    
    author: {
        image: string;
        userName: string;
    }
    replies?: ICommentProps[];
    
}
export const Comment = ( {content, likesCount, publishDate, author, replies}: ICommentProps ) => {
    const [ShowReplies, setShowReplies] = useState(false)

    const date = useMemo(() => {
        
        const dateAsDate = parseISO(publishDate)
        return format(dateAsDate, 'dd/MM/yyyy -- hh:mm').replace('--', 'às')

        return '15/07/2005 as 15:25'
    }, [publishDate])

    return (
        <div className='flex flex-col gap-1'>
        <div className="flex gap-2 items-start">
            <Image
                width={40}
                height={40}

                draggable={false}
                className='rounded'
                src={author.image}
                alt='Imagem de Perfil'
            />

            <div className="bg-paper flex-1 flex flex-col gap-4 p-2 rounded">
                <div className="flex gap-2 items-center">
                    <span className="font-bold"
                    >
                        {author.userName}
                    </span>

                    <span className="font-extrabold text-xs opactity-50 "
                    >
                        {date}
                    </span>
                </div>

                <p>{content}</p>

                <div className=" flex gap-4">
                    <div className="flex gap-1 items-center">
                        <MdThumbUp />
                        <span>{likesCount}</span>
                    </div>

                    { (replies && replies.length > 0) &&(
                        <button className="flex gap-1 items-center text-primary" onClick={() => setShowReplies(!ShowReplies)} >
                        {ShowReplies ? <MdArrowDropUp size={24} /> : <MdArrowDropDown size={24} />}
                             <span>{ShowReplies ? 'Ocultar' : 'Ver'} Resposta ({replies.length})</span>
                        </button>
                    )}

                </div>
            </div>
        </div>
        <div className='pl-12'>
           {ShowReplies && replies?.map(reply => (
                <Comment key={reply.publishDate} {...reply} />
           ))}
        </div>
        </div>
    )
}