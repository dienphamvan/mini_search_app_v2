import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import { describe, expect, it, vi } from 'vitest'

vi.mock('~/components/common/icons/LionIcon', () => ({
    LionIcon: () => <svg data-testid='lion-icon' />,
}))

describe('Header Component', () => {
    it('renders the header correctly', () => {
        render(<Header />)

        expect(screen.getByTestId('lion-icon')).toBeInTheDocument()
        expect(
            screen.getByText('An Official Website of the')
        ).toBeInTheDocument()
        expect(screen.getByText('Singapore Government')).toBeInTheDocument
    })
})
