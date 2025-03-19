type TextCharHighlightProps = {
    text: string
    highlights?: string[]
}

export function TextCharHighlight({
    text,
    highlights = [],
}: TextCharHighlightProps) {
    if (highlights.length === 0) return <span>{text}</span>

    const regex = new RegExp(`(${highlights.join('|')})`, 'gi')
    const parts = text.split(regex)

    return (
        <span>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span key={index} className='font-bold'>
                        {part}
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </span>
    )
}
