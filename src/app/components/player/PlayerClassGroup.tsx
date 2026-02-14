import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PlayerClass, IPlayerClassProps } from "./PlayerClass";

interface IPlayerClassGroupProps {
    position: number;
    open: boolean;
    title: string;
    classes: Omit<IPlayerClassProps, 'onCheck' | 'onPlay'>[];

    onToggle: () => void;

}
export function PlayerClassGroup({ position, title, classes, open, onToggle }: IPlayerClassGroupProps) {
    return (
        <div className="flex flex-col">
            <button className="flex gap-4 p-4 bg-paper items-center " onClick={onToggle}>
                <div className="bg-background h-12 w-12 rounded-full flex items-center justify-center">
                    {position}
                </div>

                <div className="flex flex-col flex-1 items-start">
                    <span className="font-bold text-start line-clamp-1">{title}</span>
                    <span className="text-[14px] font-light text-start">
                        {classes.filter(classItem => classItem.done).length}/{classes.length} aulas
                    </span>
                </div>

                {open ? (
                    <MdKeyboardArrowDown className="" size={28} />
                ) : (
                    <MdKeyboardArrowRight className="" size={28} />
                )}
            </button>

            <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
                {classes.map(classItem => (
                    <li key={classItem.title}>
                        <PlayerClass
                            {...classItem}

                            onCheck={() => console.log('check')}
                            onPlay={() => console.log('play')}
                        />
                    </li>
                ))}
            </ol>

        </div>
    )
}