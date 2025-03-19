import { render, screen } from '@testing-library/react'
import { List } from './List'
import { describe, expect, it } from 'vitest'
import type { SearchResponse } from '~/types'

const mockSearchResponse: SearchResponse = {
    TotalNumberOfResults: 10,
    Page: 1,
    PageSize: 5,
    ResultItems: [
        {
            DocumentId: '1',
            DocumentTitle: {
                Text: 'Item 1',
                Highlights: [],
            },
            DocumentURI: 'https://example.com/1',
            DocumentExcerpt: {
                Text: 'Item 1 excerpt',
                Highlights: [],
            },
        },
    ],
}

describe('List Component', () => {
    it('renders message when no data is found', () => {
        render(
            <List
                searchResult={{
                    TotalNumberOfResults: 0,
                    Page: 1,
                    PageSize: 5,
                    ResultItems: [],
                }}
            />
        )
        expect(screen.getByText('No data found')).toBeInTheDocument()
    })

    it('renders list items correctly', () => {
        render(<List searchResult={mockSearchResponse} />)

        expect(
            screen.getByText('Showing 1-5 of 10 results')
        ).toBeInTheDocument()
        expect(screen.getByText('Item 1')).toBeInTheDocument()
        expect(screen.getByText('Item 1 excerpt')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /item 1/i })).toHaveAttribute(
            'href',
            'https://example.com/1'
        )
    })
})
