import { render } from '@testing-library/react'
import { ListItem } from './ListItem'
import type { SearchRecord } from '~/types'
import { describe, expect, it } from 'vitest'

describe('ListItem', () => {
    const mockData: SearchRecord = {
        DocumentId: '123',
        DocumentURI: 'https://example.com',
        DocumentTitle: {
            Text: 'Example Title',
            Highlights: [],
        },
        DocumentExcerpt: {
            Text: 'Example excerpt text',
            Highlights: [],
        },
    }

    it('renders the document title', () => {
        const { getByText } = render(<ListItem data={mockData} />)
        expect(getByText('Example Title')).toBeInTheDocument()
    })

    it('renders the document excerpt', () => {
        const { getByText } = render(<ListItem data={mockData} />)
        expect(getByText('Example excerpt text')).toBeInTheDocument()
    })

    it('renders the document URI', () => {
        const { getByText } = render(<ListItem data={mockData} />)
        expect(getByText('https://example.com')).toBeInTheDocument()
    })

    it('renders the link with correct href', () => {
        const { getByRole } = render(<ListItem data={mockData} />)
        const link = getByRole('link', { name: /example title/i })
        expect(link).toHaveAttribute('href', 'https://example.com')
    })
})
