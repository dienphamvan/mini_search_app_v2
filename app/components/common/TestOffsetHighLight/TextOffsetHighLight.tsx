import { processHighlights } from '~/utils/processHighlights'

type TextOffsetHighLightProps = {
    text: string
    highlights?: {
        BeginOffset: number
        EndOffset: number
    }[]
}

export function TextOffsetHighLight({
    text,
    highlights = [],
}: TextOffsetHighLightProps) {
    const segments = processHighlights(text, highlights)

    if (segments.length === 1 && !segments[0].isHighlighted) {
        return <span>{text}</span>
    }

    return (
        <span>
            {segments.map((segment) =>
                segment.isHighlighted ? (
                    <span className='font-extrabold' key={segment.key}>
                        {segment.text}
                    </span>
                ) : (
                    <span key={segment.key}>{segment.text}</span>
                )
            )}
        </span>
    )
}
