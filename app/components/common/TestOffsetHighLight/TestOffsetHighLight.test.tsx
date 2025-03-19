import { render, screen } from '@testing-library/react'
import { TextOffsetHighLight } from './TextOffsetHighLight'
import { describe, expect, it } from 'vitest'

describe('TextOffsetHighLight Component', () => {
    it('renders plain text when no highlights are provided', () => {
        render(<TextOffsetHighLight text='Hello World' />)
        expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('renders text with highlighted segments', () => {
        render(
            <TextOffsetHighLight
                text='Hello World'
                highlights={[{ BeginOffset: 6, EndOffset: 11 }]}
            />
        )

        expect(screen.getByText('Hello')).toBeInTheDocument()
        expect(screen.getByText('World')).toBeInTheDocument()
        expect(screen.getByText('World')).toHaveClass('font-extrabold')
    })
})
