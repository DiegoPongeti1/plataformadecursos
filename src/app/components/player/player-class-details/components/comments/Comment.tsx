import Image from 'next/image'

import { MdArrowDropDown, MdThumbUp } from "react-icons/md"

// interface ICommentProps {

// }

export const Comment = () => {

    return (
        <div className="flex gap-2 items-start">
            <Image
                width={40}
                height={40}

                draggable={false}
                className='rounded'
                src={'https://yt3.ggpht.com/ytc/AIdro_meYPWF3Z81dj754MMCwRNB5qa5X0rnAVUlmwP7B-cxg3Ij=s600-c-k-c0x00ffffff-no-rj-rp-mo'}
                alt='Imagem de Perfil'
            />

            <div className="bg-paper flex-1 flex flex-col gap-4 p-2 rounded">
                <div className="flex gap-2 items-center">
                    <span className="font-bold"
                    >
                        Diego
                    </span>

                    <span className="font-extrabold text-xs opactity-50 "
                    >
                        22/07/2000 as 15:25
                    </span>
                </div>

                <p>Comment</p>

                <div className=" flex gap-4">
                    <div className="flex gap-1 items-center">
                        <MdThumbUp />
                        <span>5</span>
                    </div>

                    <button className="flex gap-1 items-center text-primary ">
                        <MdArrowDropDown size={24} />
                        <span>Ver Resposta (5)</span>
                    </button>
                </div>
            </div>
        </div>
    )
}