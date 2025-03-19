import { describe, expect, it } from 'vitest'
import { processHighlights } from './processHighlights'

// Define test cases
describe('processHighlights', () => {
    it('returns full text as a single non-highlighted segment when no highlights are provided', () => {
        const result = processHighlights('Hello World', [])
        expect(result).toEqual([
            { text: 'Hello World', isHighlighted: false, key: '0-full' },
        ])
    })

    it('correctly processes a single highlight', () => {
        const result = processHighlights('Hello World', [
            { BeginOffset: 0, EndOffset: 5 },
        ])
        expect(result).toEqual([
            { text: 'Hello', isHighlighted: true, key: '0-5' },
            { text: ' World', isHighlighted: false, key: '5-11' },
        ])
    })

    it('correctly processes multiple non-overlapping highlights', () => {
        const result = processHighlights('Hello World', [
            { BeginOffset: 0, EndOffset: 5 },
            { BeginOffset: 6, EndOffset: 11 },
        ])
        expect(result).toEqual([
            { text: 'Hello', isHighlighted: true, key: '0-5' },
            { text: ' ', isHighlighted: false, key: '5-6' },
            { text: 'World', isHighlighted: true, key: '6-11' },
        ])
    })

    it('returns correct segments when the entire text is highlighted', () => {
        const result = processHighlights('Hello', [
            { BeginOffset: 0, EndOffset: 5 },
        ])
        expect(result).toEqual([
            { text: 'Hello', isHighlighted: true, key: '0-5' },
        ])
    })

    it('correctly processes highlights at the end of the text', () => {
        const result = processHighlights('Hello World', [
            { BeginOffset: 6, EndOffset: 11 },
        ])
        expect(result).toEqual([
            { text: 'Hello ', isHighlighted: false, key: '0-6' },
            { text: 'World', isHighlighted: true, key: '6-11' },
        ])
    })
})
