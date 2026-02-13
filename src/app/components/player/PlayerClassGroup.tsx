import { PlayerClass } from "./PlayerClass";

interface IPlayerClassGroup {
    children: React.ReactNode
}
export function PlayerClassGroup({ }: IPlayerClassGroup) {
    return (
        <div className="flex flex-col gap-4">

            <PlayerClass
                done={false}
                title="API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas"
                playing
                onCheck={() => console.log('check')}
                onPlay={() => console.log('play')}
            />

            <PlayerClass
                done={false}
                title="API Rest, Node e TypeScript: #00 - Apresentação do Curso, tecnologias e ferramentas"
                playing
                onCheck={() => console.log('check')}
                onPlay={() => console.log('play')}
            />
        </div>
    )
}