import { render, screen } from '@testing-library/react'
import Loading from './Loading'
import { describe, expect, it } from 'vitest'

describe('Loading Component', () => {
    it('renders with default props', () => {
        render(<Loading />)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('renders with custom text', () => {
        render(<Loading text='Please wait...' />)
        expect(screen.getByText('Please wait...')).toBeInTheDocument()
    })

    it('applies correct size classes', () => {
        const { container } = render(<Loading size='small' />)
        expect(container.querySelector('.h-4.w-4')).toBeTruthy()
    })

    it('hides text when not provided', () => {
        render(<Loading text='' />)
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })
})
