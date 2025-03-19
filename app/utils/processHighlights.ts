type TextSegment = {
    text: string
    isHighlighted: boolean
    key: string
}

/**
 * Processes text and highlights into segments for rendering
 * @param text - The original text string
 * @param highlights - Array of highlight position objects
 * @returns Array of text segments with highlighting information
 */
export function processHighlights(
    text: string,
    highlights: {
        BeginOffset: number
        EndOffset: number
    }[] = []
): TextSegment[] {
    if (!highlights.length)
        return [{ text, isHighlighted: false, key: '0-full' }]

    const segments: TextSegment[] = []

    // Sort highlights by BeginOffset to ensure proper processing
    const sortedHighlights = [...highlights].sort(
        (a, b) => a.BeginOffset - b.BeginOffset
    )

    // Add initial segment before first highlight if needed
    if (sortedHighlights[0].BeginOffset > 0) {
        segments.push({
            text: text.slice(0, sortedHighlights[0].BeginOffset),
            isHighlighted: false,
            key: `0-${sortedHighlights[0].BeginOffset}`,
        })
    }

    // Process each highlight and the text between highlights
    sortedHighlights.forEach((highlight, index) => {
        const { BeginOffset, EndOffset } = highlight

        // Add highlighted segment
        segments.push({
            text: text.slice(BeginOffset, EndOffset),
            isHighlighted: true,
            key: `${BeginOffset}-${EndOffset}`,
        })

        // Add segment between this highlight and the next (or end of text)
        const nextBeginOffset =
            sortedHighlights[index + 1]?.BeginOffset || text.length

        if (EndOffset < nextBeginOffset) {
            segments.push({
                text: text.slice(EndOffset, nextBeginOffset),
                isHighlighted: false,
                key: `${EndOffset}-${nextBeginOffset}`,
            })
        }
    })

    return segments
}
