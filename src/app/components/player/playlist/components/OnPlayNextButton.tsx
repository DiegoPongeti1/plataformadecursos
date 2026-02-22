'use client'

export interface IOnPlayNextButtonProps {
    onPlayNext: () => void;
}

export const OnPlayNextButton = ({ onPlayNext }: IOnPlayNextButtonProps) => {
    return (
        <button
            onClick={onPlayNext}
        >
            Próxima Aula
        </button>
    )
}