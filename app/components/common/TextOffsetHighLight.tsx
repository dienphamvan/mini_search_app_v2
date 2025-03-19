import type { JSX } from 'react'

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
    if (!highlights.length) return <span>{text}</span>

    const result: JSX.Element[] = []

    highlights.forEach(({ BeginOffset, EndOffset }, index) => {
        if (index === 0) {
            result.push(
                <span key={`0-${BeginOffset}`}>
                    {text.slice(0, BeginOffset)}
                </span>
            )
        }

        result.push(
            <span
                className='font-extrabold'
                key={`${BeginOffset}-${EndOffset}`}
            >
                {text.slice(BeginOffset, EndOffset)}
            </span>
        )

        const nextBeginOffset =
            highlights[index + 1]?.BeginOffset || text.length

        result.push(
            <span key={`${EndOffset}-${nextBeginOffset}`}>
                {text.slice(EndOffset, nextBeginOffset)}
            </span>
        )
    })

    return <span>{result}</span>
}
