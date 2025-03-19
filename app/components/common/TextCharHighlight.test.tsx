import { render, screen } from '@testing-library/react'
import { TextCharHighlight } from './TextCharHighlight'
import { describe, expect, it } from 'vitest'

describe('TextCharHighlight Component', () => {
    it('renders text without highlights', () => {
        render(<TextCharHighlight text='Hello World' />)
        expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('renders text with highlighted words', () => {
        render(<TextCharHighlight text='Hello World' highlights={['World']} />)
        const highlighted = screen.getByText('World')
        expect(highlighted).toBeInTheDocument()
        expect(highlighted).toHaveClass('font-bold')
    })

    it('renders multiple highlighted words', () => {
        render(
            <TextCharHighlight
                text='Hello World, Welcome'
                highlights={['World', 'Welcome']}
            />
        )
        expect(screen.getByText('World')).toHaveClass('font-bold')
        expect(screen.getByText('Welcome')).toHaveClass('font-bold')
    })

    it('renders case-insensitive highlights', () => {
        render(<TextCharHighlight text='Hello world' highlights={['WORLD']} />)
        expect(screen.getByText('world')).toHaveClass('font-bold')
    })
})
